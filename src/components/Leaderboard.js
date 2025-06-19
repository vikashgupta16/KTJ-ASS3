import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = ({ scores }) => {
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedScores = [...scores].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'score':
        aValue = (a.score / a.totalQuestions) * 100;
        bValue = (b.score / b.totalQuestions) * 100;
        break;
      case 'time':
        aValue = a.totalTime;
        bValue = b.totalTime;
        break;
      case 'date':
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
        break;
      default:
        aValue = a[sortBy];
        bValue = b[sortBy];
    }

    if (sortOrder === 'desc') {
      return bValue - aValue;
    } else {
      return aValue - bValue;
    }
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getScorePercentage = (score, total) => {
    return Math.round((score / total) * 100);
  };

  if (scores.length === 0) {
    return (
      <div className="card fade-in">
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
          <h3>No scores yet!</h3>
          <p>Be the first to take a quiz and claim your spot on the leaderboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="leaderboard fade-in">
      <div className="card">
        <div className="leaderboard-header">
          <h2 style={{ color: 'var(--text-primary)' }}>Top Scores</h2>
          <div className="sort-controls">
            <span style={{ color: 'var(--text-secondary)' }}>Sort by: </span>
            <button 
              className={`sort-button ${sortBy === 'score' ? 'active' : ''}`}
              onClick={() => handleSort('score')}
            >
              Score {sortBy === 'score' && (sortOrder === 'desc' ? '↓' : '↑')}
            </button>
            <button 
              className={`sort-button ${sortBy === 'time' ? 'active' : ''}`}
              onClick={() => handleSort('time')}
            >
              Time {sortBy === 'time' && (sortOrder === 'desc' ? '↓' : '↑')}
            </button>
            <button 
              className={`sort-button ${sortBy === 'date' ? 'active' : ''}`}
              onClick={() => handleSort('date')}
            >
              Date {sortBy === 'date' && (sortOrder === 'desc' ? '↓' : '↑')}
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedScores.map((score, index) => (
                <tr key={`${score.date}-${score.playerName}`}>
                  <td>
                    <div className="rank">
                      {index === 0 && '🥇'}
                      {index === 1 && '🥈'}
                      {index === 2 && '🥉'}
                      {index > 2 && `#${index + 1}`}
                    </div>
                  </td>
                  <td className="player-name">{score.playerName}</td>
                  <td>
                    <div className="score-cell">
                      <div className="score-value">
                        {score.score}/{score.totalQuestions}
                      </div>
                      <div className="score-percentage">
                        {getScorePercentage(score.score, score.totalQuestions)}%
                      </div>
                    </div>
                  </td>
                  <td className="category">{score.category}</td>
                  <td className="difficulty">
                    <span className={`difficulty-badge ${score.difficulty}`}>
                      {score.difficulty}
                    </span>
                  </td>
                  <td className="time">{score.totalTime}s</td>
                  <td className="date">{formatDate(score.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
