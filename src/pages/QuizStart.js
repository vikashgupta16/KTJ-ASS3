import React from 'react';
import { Navigate } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';

const QuizStart = ({ playerData, onQuizComplete, onReset }) => {
  if (!playerData) {
    return <Navigate to="/quiz" replace />;
  }

  return (
    <div className="page">
      <div className="container">
        <QuizEngine 
          playerData={playerData}
          onQuizComplete={onQuizComplete}
          onReset={onReset}
        />
      </div>
    </div>
  );
};

export default QuizStart;
