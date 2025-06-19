import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlayerForm = ({ onSubmit, initialData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    playerName: initialData?.playerName || '',
    category: initialData?.category || '',
    difficulty: initialData?.difficulty || ''
  });

  const categories = [
    { value: 'general', label: 'General Knowledge' },
    { value: 'science', label: 'Science & Nature' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
    { value: 'sports', label: 'Sports' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'technology', label: 'Technology' },
    { value: 'literature', label: 'Literature' }
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
      navigate('/quiz/start');
    }
  };

  const isFormValid = () => {
    return formData.playerName.trim() && formData.category && formData.difficulty;
  };

  return (
    <div
      className="card fade-in"
      style={{
        background: 'var(--card-bg)',
        color: 'var(--text-primary)',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px var(--glass-shadow)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'background 0.4s, color 0.4s'
      }}
    >
      <h2 style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>Player Setup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="playerName">Player Name</label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            value={formData.playerName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--glass-border)',
              transition: 'background 0.4s, color 0.4s'
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Quiz Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            style={{
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--glass-border)',
              transition: 'background 0.4s, color 0.4s'
            }}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty Level</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
            style={{
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--glass-border)',
              transition: 'background 0.4s, color 0.4s'
            }}
          >
            <option value="">Select difficulty</option>
            {difficulties.map(diff => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!isFormValid()}
          style={{
            width: '100%',
            marginTop: '1rem',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: '#fff'
          }}
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
