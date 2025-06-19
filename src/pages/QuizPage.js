import React from 'react';
import AddPlayerForm from '../components/AddPlayerForm';

const QuizPage = ({ onPlayerSubmit, playerData }) => {
  return (
    <div
      className="page"
      style={{
        background: 'var(--bg-gradient)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        transition: 'background 0.4s, color 0.4s'
      }}
    >
      <div className="container">
        <div className="quiz-setup">
          <h1 className="page-title fade-in">Ready to Test Your Knowledge?</h1>
          <p className="page-subtitle fade-in">
            Fill in your details below to get started with the quiz
          </p>
          <AddPlayerForm onSubmit={onPlayerSubmit} initialData={playerData} />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
