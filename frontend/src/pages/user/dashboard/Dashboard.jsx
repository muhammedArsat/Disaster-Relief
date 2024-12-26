import React,{useState,useEffect} from 'react';
import './Dashboard.css';
import Chart from '../../../components/user/chart/Chart';
import TransactionHistory from '../../../components/user/history/TransactionHistory';
import DashboardCard from '../../../components/user/dashboardCard/DashboardCard';
const Dashboard = () => {
    const [history,SetHistory] = useState([]);
    const data = [
        {
            name: 'Jan',
            amount: 5000,
            date: '2024-12-21',
            description: 'For flood Donation',
        },
        {
            name: 'Feb',
            amount: 7000,
            date: '2024-11-21',
            description: 'For landscape Donation',
        },
        {
            name: 'Mar',
            amount: 8000,
            date: '2024-10-21',
            description: 'For drought Donation',
        },
        {
            name: 'Apr',
            amount: 3000,
            date: '2024-09-21',
            description: 'For Tsunami Donation',
        },
        {
            name: 'May',
            amount: 2000,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        },
        {
            name: 'Jun',
            amount: 4500,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        }, {
            name: 'Jul',
            amount: 1300,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        }, {
            name: 'Aug',
            amount: 7500,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        },
        {
            name: 'Sep',
            amount: 3000,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        },
        {
            name: 'Oct',
            amount: 1500,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        },
        {
            name: 'Nov',
            amount: 100,
            date: '2024-08-21',
            description: 'For EarthQuake Donation',
        },
    ];
useEffect(()=>{
    const history = data.map((each) => {
        return {
            date: each.date,
            description: each.description,
        };
    });
    SetHistory(history);
},[])

const totalAmount = data.reduce((acc,each)=>{
    return acc+each.amount;
},0)

    console.log(history);
    return (
        <div className="dashboard_container">
            {/* <div className="dashboard_heading">
                <h2>Donation Overview</h2>
                <h2>Donation History</h2>
            </div> */}
            <div className="dashboard_history">
                <Chart data={data} />
                <TransactionHistory history={history} />
            </div>
            <div className="dashboard_contents">
               <DashboardCard content={"Total Donation Amount"} count={totalAmount}/>
                <DashboardCard content={"Your Donation Amount"} count={totalAmount}/>
                <DashboardCard content={"Total Families you helped"} count={"50+"}/>

            </div>
        </div>
    );
};

export default Dashboard;
