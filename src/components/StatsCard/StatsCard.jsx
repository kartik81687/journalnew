import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, count, icon, color }) => {
  return (
    <div className="stats-card" style={{ backgroundColor: color }}>
      <div className="stats-icon">{icon}</div>
      <div className="stats-info">
        <h3>{count}</h3>
        <p>{title}</p>
        <span className="subtitle">Increased vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard; 