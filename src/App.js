import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import QuizStart from './pages/QuizStart';
import ScoresPage from './pages/ScoresPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [playerData, setPlayerData] = useState(null);
  const [quizScores, setQuizScores] = useState([]);

  useEffect(() => {
    // Load data from localStorage on app start
    const savedPlayerData = localStorage.getItem('currentPlayer');
    const savedScores = localStorage.getItem('quizScores');
    
    if (savedPlayerData) {
      setPlayerData(JSON.parse(savedPlayerData));
    }
    
    if (savedScores) {
      setQuizScores(JSON.parse(savedScores));
    }
  }, []);

  const savePlayerData = (data) => {
    setPlayerData(data);
    localStorage.setItem('currentPlayer', JSON.stringify(data));
  };

  const saveQuizScore = (scoreData) => {
    const updatedScores = [...quizScores, scoreData];
    setQuizScores(updatedScores);
    localStorage.setItem('quizScores', JSON.stringify(updatedScores));
  };

  const resetPlayerData = () => {
    setPlayerData(null);
    localStorage.removeItem('currentPlayer');
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/quiz" 
              element={
                <QuizPage 
                  onPlayerSubmit={savePlayerData}
                  playerData={playerData}
                />
              } 
            />
            <Route 
              path="/quiz/start" 
              element={
                <QuizStart 
                  playerData={playerData}
                  onQuizComplete={saveQuizScore}
                  onReset={resetPlayerData}
                />
              } 
            />
            <Route 
              path="/scores" 
              element={<ScoresPage scores={quizScores} />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
