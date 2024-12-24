import React from 'react';
import './DashboardCard.css';
const DashboardCard = ({content, count}) => {
    return (
        <div className='DashboardCard_container'>
            <h5>{content}</h5>
            <h2>{count}</h2>
        </div>
    );
};

export default DashboardCard;
