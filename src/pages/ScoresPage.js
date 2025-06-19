import React from 'react';
import Leaderboard from '../components/Leaderboard';

const ScoresPage = ({ scores }) => {
  return (
    <div
      className="page"
      style={{
        background: 'var(--bg-gradient)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        transition: 'background 0.4s, color 0.4s',
      }}
    >
      <div className="container">
        <h1 className="page-title fade-in">Leaderboard</h1>
        <p
          className="page-subtitle fade-in"
          style={{ color: 'var(--text-secondary)' }}
        >
          See how you stack up against other players!
        </p>
        <Leaderboard scores={scores} />
      </div>
    </div>
  );
};

export default ScoresPage;
