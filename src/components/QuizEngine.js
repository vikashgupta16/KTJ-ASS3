import React, { useState, useEffect, useCallback } from 'react';
import { getQuestions } from '../data/questions';
import ScoreSummary from './ScoreSummary';

const QuizEngine = ({ playerData, onQuizComplete, onReset }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [answerTimes, setAnswerTimes] = useState([]);
  const [autoProgressTimeout, setAutoProgressTimeout] = useState(null);

  useEffect(() => {
    // Load questions based on player data
    const quizQuestions = getQuestions(playerData.category, playerData.difficulty, 10);
    setQuestions(quizQuestions);
    setQuestionStartTime(Date.now());
  }, [playerData]);

  // Cleanup effect for timeouts
  useEffect(() => {
    return () => {
      if (autoProgressTimeout) {
        clearTimeout(autoProgressTimeout);
      }
    };
  }, [autoProgressTimeout]);

  // Define completeQuiz first
  const completeQuiz = useCallback((finalAnswers = answers, finalAnswerTimes = answerTimes) => {
    setQuizCompleted(true);
    const score = finalAnswers.filter(answer => answer.correct).length;
    const totalTime = finalAnswerTimes.reduce((sum, time) => sum + time, 0);

    const quizResult = {
      playerName: playerData.playerName,
      category: playerData.category,
      difficulty: playerData.difficulty,
      score: score,
      totalQuestions: questions.length,
      totalTime: Math.round(totalTime),
      date: new Date().toISOString(),
      answerTimes: finalAnswerTimes,
      answers: finalAnswers
    };

    onQuizComplete(quizResult);  }, [playerData, questions.length, onQuizComplete, answers, answerTimes]);

  const goToNextQuestion = useCallback((updatedAnswers = answers, updatedAnswerTimes = answerTimes) => {
    if (autoProgressTimeout) {
      clearTimeout(autoProgressTimeout);
      setAutoProgressTimeout(null);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(15);
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionStartTime(Date.now());
    } else {
      completeQuiz(updatedAnswers, updatedAnswerTimes);
    }
  }, [currentQuestionIndex, questions.length, completeQuiz, answers, answerTimes, autoProgressTimeout]);  const handleTimeout = useCallback(() => {
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const newAnswers = [...answers, { questionId: questions[currentQuestionIndex].id, answer: null, correct: false }];
    const newAnswerTimes = [...answerTimes, timeTaken];

    setAnswers(newAnswers);
    setAnswerTimes(newAnswerTimes);
    setSelectedAnswer(null);
    setShowResult(true);

    const timeoutId = setTimeout(() => {
      goToNextQuestion(newAnswers, newAnswerTimes);
    }, 2000);
    setAutoProgressTimeout(timeoutId);
  }, [answers, answerTimes, currentQuestionIndex, questions, questionStartTime, goToNextQuestion]);
  useEffect(() => {
    if (quizCompleted || timeLeft === 0 || selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);  }, [timeLeft, quizCompleted, handleTimeout, selectedAnswer]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;

    // Clear any existing timeout
    if (autoProgressTimeout) {
      clearTimeout(autoProgressTimeout);
      setAutoProgressTimeout(null);
    }

    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const isCorrect = answerIndex === questions[currentQuestionIndex].correct;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const newAnswers = [...answers, {
      questionId: questions[currentQuestionIndex].id,
      answer: answerIndex,
      correct: isCorrect
    }];
    const newAnswerTimes = [...answerTimes, timeTaken];

    setAnswers(newAnswers);
    setAnswerTimes(newAnswerTimes);

    // Auto-progress after 2 seconds
    const timeoutId = setTimeout(() => {
      goToNextQuestion(newAnswers, newAnswerTimes);
    }, 2000);
    setAutoProgressTimeout(timeoutId);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0 && !showResult) {
      if (autoProgressTimeout) {
        clearTimeout(autoProgressTimeout);
        setAutoProgressTimeout(null);
      }
      
      // Reset UI state first
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(15);
      
      // Update question index
      setCurrentQuestionIndex(prev => prev - 1);
      setQuestionStartTime(Date.now());
      
      // Remove the last answ
      setAnswers(prev => prev.length > 0 ? prev.slice(0, -1) : prev);
      setAnswerTimes(prev => prev.length > 0 ? prev.slice(0, -1) : prev);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="card">
        <h2>Loading Quiz...</h2>
        <p>Preparing your {playerData.difficulty} {playerData.category} questions...</p>
      </div>
    );
  }

  if (quizCompleted) {
    const score = answers.filter(answer => answer.correct).length;
    const totalTime = answerTimes.reduce((sum, time) => sum + time, 0);

    return (
      <ScoreSummary
        playerName={playerData.playerName}
        score={score}
        totalQuestions={questions.length}
        totalTime={Math.round(totalTime)}
        category={playerData.category}
        difficulty={playerData.difficulty}
        onPlayAgain={onReset}
        answerTimes={answerTimes}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-info">
          <h2>Quiz: {playerData.category} ({playerData.difficulty})</h2>
          <p>Player: {playerData.playerName}</p>
        </div>
        <div className="timer">
          Time: {timeLeft}s
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-counter">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>

      <div className="question-card" key={currentQuestionIndex}>
        <h3 className="question-title">{currentQuestion.question}</h3>

        <ul className="options-list">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = showResult && index === currentQuestion.correct;
            const isIncorrect = showResult && isSelected && index !== currentQuestion.correct;
            
            return (
              <li key={index} className="option-item">
                <button
                  className={`option-button ${
                    isSelected && !showResult ? 'selected' : ''
                  } ${
                    isCorrect ? 'correct' : ''
                  } ${
                    isIncorrect ? 'incorrect' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="quiz-controls">
        <button
          className="btn btn-secondary"
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0 || showResult}
        >
          Previous
        </button>

        <span className="spacer"></span>
      </div>
    </div>
  );
};

export default QuizEngine;
