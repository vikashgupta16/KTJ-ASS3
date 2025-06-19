import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
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
        <div className="about-content fade-in">
          <h1 className="page-title">About QuizMaster</h1>
          
          <div className="about-grid">
            <div className="about-section">
              <h2>🚀 What is QuizMaster?</h2>
              <p>
                QuizMaster is an interactive quiz application built with React that challenges
                your knowledge across multiple categories. Test yourself with timed questions,
                track your progress, and compete with others on the leaderboard!
              </p>
            </div>

            <div className="about-section">
              <h2>💻 Tech Stack</h2>
              <div className="tech-stack">
                <div className="tech-item">
                  <span className="tech-icon">⚛️</span>
                  <span>React 18</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🛣️</span>
                  <span>React Router</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🎨</span>
                  <span>CSS3 & Animations</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">💾</span>
                  <span>LocalStorage</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">📱</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>✨ Features</h2>
              <ul className="features-list">
                <li>🎯 Multiple quiz categories (Science, History, General Knowledge, etc.)</li>
                <li>⚡ Timed questions with auto-skip</li>
                <li>📊 Real-time progress tracking</li>
                <li>🏆 Score tracking and leaderboard</li>
                <li>📱 Fully responsive design</li>
                <li>💾 Data persistence with localStorage</li>
                <li>🎨 Smooth CSS animations</li>
                <li>📈 Performance analytics</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>🧠 What I Learned</h2>
              <div className="learning-points">
                <div className="learning-item">
                  <h3>React Hooks Mastery</h3>
                  <p>Deepened understanding of useState, useEffect, and custom hooks for state management.</p>
                </div>
                <div className="learning-item">
                  <h3>Component Architecture</h3>
                  <p>Learned to structure reusable components and manage props effectively.</p>
                </div>
                <div className="learning-item">
                  <h3>Data Persistence</h3>
                  <p>Implemented localStorage for maintaining user data across sessions.</p>
                </div>
                <div className="learning-item">
                  <h3>CSS Animations</h3>
                  <p>Created smooth animations and transitions to enhance user experience.</p>
                </div>
                <div className="learning-item">
                  <h3>Responsive Design</h3>
                  <p>Built mobile-first design with CSS Grid and Flexbox.</p>
                </div>
                <div className="learning-item">
                  <h3>Timer Management</h3>
                  <p>Handled complex timer logic with cleanup to prevent memory leaks.</p>
                </div>
              </div>
            </div>

            <div className="about-section fun-section">
              <h2>🎉 Fun Facts & Memes</h2>
              <div className="meme-grid">
                <div className="meme-item">
                  <div className="meme-text">When your code works on the first try:</div>
                  <div className="meme-emoji">🤯✨</div>
                </div>
                <div className="meme-item">
                  <div className="meme-text">Debugging CSS:</div>
                  <div className="meme-emoji">🔥🧠</div>
                </div>
                <div className="meme-item">
                  <div className="meme-text">React re-renders everywhere:</div>
                  <div className="meme-emoji">🌪️💻</div>
                </div>
                <div className="meme-item">
                  <div className="meme-text">localStorage saves the day:</div>
                  <div className="meme-emoji">🦸‍♂️💾</div>
                </div>
              </div>
              
              <div className="fun-stats">
                <h3>Development Stats</h3>
                <div className="stat-grid">
                  <div className="stat">
                    <div className="stat-number">☕ 47</div>
                    <div className="stat-label">Cups of Coffee</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">🐛 23</div>
                    <div className="stat-label">Bugs Squashed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">💡 156</div>
                    <div className="stat-label">Eureka Moments</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">🔥 12</div>
                    <div className="stat-label">Hours Debugging CSS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="about-section">
              <h2>🎯 Assignment Completion</h2>
              <div className="completion-checklist">
                <div className="check-item completed">✅ Fixed Navigation with Hamburger Menu</div>
                <div className="check-item completed">✅ Hero Section with CSS Animations</div>
                <div className="check-item completed">✅ Player Form with Validation</div>
                <div className="check-item completed">✅ Quiz Engine with Timer</div>
                <div className="check-item completed">✅ Score Summary with Analytics</div>
                <div className="check-item completed">✅ Leaderboard with Sorting</div>
                <div className="check-item completed">✅ React Router Implementation</div>
                <div className="check-item completed">✅ LocalStorage Data Persistence</div>
                <div className="check-item completed">✅ Responsive Design</div>
                <div className="check-item completed">✅ Performance Tracking (Bonus)</div>
              </div>
            </div> */}

            <div className="about-footer">
              <p>
                Built with ❤️ for the Kshitij Web Development Workshop
              </p>
              <p>
                <em>"The only way to learn to program is by writing programs." - Dennis Ritchie</em>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <a 
                  href="https://github.com/vikashgupta16/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--accent-primary)', 
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  🔗 View My Profile on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
