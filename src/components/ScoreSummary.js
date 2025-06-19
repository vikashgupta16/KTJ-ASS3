import React from 'react';
import { Link } from 'react-router-dom';

const ScoreSummary = ({ 
  playerName, 
  score, 
  totalQuestions, 
  totalTime, 
  category, 
  difficulty, 
  onPlayAgain,
  answerTimes 
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const averageTime = Math.round(totalTime / totalQuestions);
  const fastestAnswer = Math.min(...answerTimes);
  const slowestAnswer = Math.max(...answerTimes);

  const getMotivationalMessage = () => {
    if (percentage >= 90) return "🏆 Quiz Champion! Outstanding performance!";
    if (percentage >= 80) return "🌟 Excellent work! You're a quiz master!";
    if (percentage >= 70) return "👏 Great job! Keep up the good work!";
    if (percentage >= 60) return "👍 Good effort! Room for improvement!";
    if (percentage >= 50) return "📚 Not bad! More practice will help!";
    return "☕ More caffeine, maybe? Don't give up!";
  };

  return (
    <div className="score-summary fade-in">
      <div className="card">
        <h1 className="score-title">Quiz Complete!</h1>
        
        <div className="player-info">
          <h2>Well done, {playerName}! 🎉</h2>
          <p className="motivational-message">{getMotivationalMessage()}</p>
        </div>

        <div className="score-stats">
          <div className="stat-item">
            <div className="stat-value">{score}/{totalQuestions}</div>
            <div className="stat-label">Correct Answers</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-value">{percentage}%</div>
            <div className="stat-label">Score</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-value">{totalTime}s</div>
            <div className="stat-label">Total Time</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-value">{averageTime}s</div>
            <div className="stat-label">Avg Time</div>
          </div>
        </div>

        <div className="performance-details">
          <h3>Performance Details</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Category:</span>
              <span className="detail-value">{category}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Difficulty:</span>
              <span className="detail-value">{difficulty}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Fastest Answer:</span>
              <span className="detail-value">{fastestAnswer.toFixed(1)}s</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Slowest Answer:</span>
              <span className="detail-value">{slowestAnswer.toFixed(1)}s</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="btn btn-primary"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
          
          <Link to="/scores" className="btn btn-secondary">
            View Leaderboard
          </Link>
          
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
