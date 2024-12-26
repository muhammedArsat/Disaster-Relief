import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './FundProgress.css';

const FundProgress = () => {
  const fundRaised = 40000;
  const fundGoal = 100000; 
  const progressValue = (fundRaised / fundGoal) * 100; 
  const fundersCount = 48;

  return (
    <div className="progress-card">
      <div className="progress-header">FLOOD FUNDS</div>
      <div className="progress-container">
        <CircularProgressbar
          value={progressValue}
          styles={buildStyles({
            pathColor: '#007bff',
            trailColor: '#d6d6d6',
          })}
        />
        <div className="progress-text">
          <div className="progress-raised">{fundRaised.toLocaleString()}</div>
          <div className="progress-symbol"><hr/></div>
          <div className="progress-goal">{fundGoal.toLocaleString()}</div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="progress-details">
        <div className="funders-count">{fundersCount}</div>
        <div className="funders-label">Funders</div>
      </div>
    </div>
  );
};

export default FundProgress;
