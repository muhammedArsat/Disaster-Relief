import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import LandingPage from './pages/user/landingPage/LandingPage';
import Navbar from './components/navbar/Navbar';
import NotFound from './pages/NotFound';
import Test from './Test';
import LocationPage from './pages/user/locationPage/Location';
import Dashboard from './pages/user/dashboard/Dashboard';
import Home from './pages/user/home/Home';
import Login from './components/auth/login';

const App = () => {
    return (
        <Router>
            <NavBarWrapper />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/user/home" element={<Home />} />
                <Route path="/user/location" element={<LocationPage />} />
                <Route path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/test" element={<Test />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

const NavBarWrapper = () => {
    const location = useLocation();
    const path = location.pathname;

    let navbarProps = {
        isLogin: false,
        isNotFound: false,
        isAdmin: false,
    };

    if (path === '/') {
        navbarProps.isLogin = true;
    } else if (path.startsWith('/user')) {
        navbarProps.isAdmin = false;
    } else if (path.startsWith('/admin')) {
        navbarProps.isAdmin = true;
    } else {
        navbarProps.isNotFound = true;
    }

    return <Navbar {...navbarProps} />;
};

export default App;
