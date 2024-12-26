import React from 'react';
import './Chart.css';
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
    return (
        <div className="chart">
            <h1>Donation Overview</h1>
            <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={true}
                        />
                        <YAxis tickLine={false} axisLine={true} />
                        <Bar
                            type="monotone"
                            dataKey="amount"
                            stroke="#007FFF"
                            fill="#007FFF"
                            radius={'10px'}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
