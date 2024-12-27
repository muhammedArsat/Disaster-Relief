import React from 'react';
import './DashboardCard.css';
import '../../../App.css';

const DashboardCard = ({ content, count }) => {
    const currentTheme = localStorage.getItem('theme');


    return (
        <div className={`DashboardCard_container ${currentTheme === 'dark' ? "dark_mode" : ""}`}>
            <h5>{content}</h5>
            <h2>{count}</h2>
        </div>
    );
};

export default DashboardCard;
