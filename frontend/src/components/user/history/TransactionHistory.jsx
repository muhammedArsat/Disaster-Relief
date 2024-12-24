import React from 'react';
import './TransactionHistory.css';
const TransactionHistory = ({ history }) => {
    return (
        <div className="history_container">
            <h1>Donation History</h1>
            <div className="table_container">
                <table id="history">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((each, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{each.date}</td>
                                    <td>{each.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionHistory;
