import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content fade-in">
          <div className="error-animation">
            <div className="error-number">4</div>
            <div className="rolling-zero">
              <div className="zero">0</div>
            </div>
            <div className="error-number">4</div>
          </div>
          
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-description">
            Looks like you've ventured into uncharted territory! 
            The page you're looking for seems to have disappeared into the digital void.
          </p>
          
          <div className="error-meme">
            <div className="meme-text">When you type the wrong URL:</div>
            <div className="meme-emoji">🤔➡️😵</div>
          </div>
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              🏠 Back to Home
            </Link>
            <Link to="/quiz" className="btn btn-secondary">
              🎯 Take a Quiz
            </Link>
          </div>
          
          <div className="helpful-links">
            <h3>Maybe you were looking for:</h3>
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/quiz">Start Quiz</Link></li>
              <li><Link to="/scores">Leaderboard</Link></li>
              <li><Link to="/about">About Page</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
