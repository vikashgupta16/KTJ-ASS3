import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{
        background: 'var(--bg-gradient)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        transition: 'background 0.4s, color 0.4s'
      }}
    >
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <h1 className="hero-title">
                Test Your Knowledge with
                <span className="gradient-text"> QuizMaster</span>
              </h1>
              <p className="hero-description">
                Challenge yourself with our interactive quiz platform. 
                Choose from multiple categories, track your progress, 
                and compete with others on the leaderboard!
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Timed Questions</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span>Score Tracking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Performance Analytics</span>
                </div>
              </div>
              <Link to="/quiz" className="btn btn-primary hero-cta">
                Start Quiz Now
              </Link>
            </div>
            
            <div className="hero-image float">
              <svg viewBox="0 0 400 300" className="quiz-illustration">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                
                {/* Quiz paper */}
                <rect x="80" y="50" width="240" height="180" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* Questions */}
                <rect x="100" y="80" width="200" height="8" rx="4" fill="#f3f4f6"/>
                <rect x="100" y="100" width="180" height="6" rx="3" fill="#f3f4f6"/>
                <rect x="100" y="120" width="160" height="6" rx="3" fill="#f3f4f6"/>
                
                {/* Options */}
                <circle cx="110" cy="145" r="4" fill="url(#gradient1)"/>
                <rect x="125" y="140" width="120" height="8" rx="4" fill="#f3f4f6"/>
                
                <circle cx="110" cy="165" r="4" fill="#e5e7eb"/>
                <rect x="125" y="160" width="100" height="8" rx="4" fill="#f3f4f6"/>
                
                <circle cx="110" cy="185" r="4" fill="#e5e7eb"/>
                <rect x="125" y="180" width="140" height="8" rx="4" fill="#f3f4f6"/>
                
                {/* Timer */}
                <circle cx="320" cy="70" r="25" fill="url(#gradient1)"/>
                <text x="320" y="76" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">15</text>
                
                {/* Decorative elements */}
                <circle cx="50" cy="100" r="20" fill="#fef3c7" opacity="0.8"/>
                <circle cx="370" cy="200" r="15" fill="#dbeafe" opacity="0.8"/>
                <circle cx="30" cy="220" r="10" fill="#fce7f3" opacity="0.8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid fade-in">
            <div className="stat-card">
              <div className="stat-number">9+</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Questions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Quiz Takers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
