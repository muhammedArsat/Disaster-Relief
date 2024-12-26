import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { IoMenu } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { RiDashboardFill } from 'react-icons/ri';
import { TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = ({ isLogin, isNotFound, isAdmin }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const handleDialogbox = () => {
        setIsDialogOpen((curr) => !curr);
    };

    const handleMenuBar = () => {
        setIsMobile((curr) => !curr);
    };

    const toggleTheme = () => {
        setIsDark((curr) => {
            const newTheme = !curr ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return !curr;
        });
        window.location.reload();
    };

    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [isMobile]);

    const handleLogout = () => {
        localStorage.removeItem('theme');
        setIsDark(false);
    };
    return (
        <>
            {isNotFound ? (
                <></>
            ) : (
                <>
                    <nav>
                        <h2>RescueBridge</h2>

                        {/* for Landing Page */}
                        {isLogin ? (
                            <>
                                <div className="landing_page_nav">
                                    <button>Login</button>
                                    <button>SignUp</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* for desktop */}
                                <ul className="desktop_ul">
                                    <Link to="/user/home">
                                        <li>
                                            Home <TiHome />
                                        </li>
                                    </Link>
                                    <Link to="/user/dashboard">
                                        <li>
                                            Dashboard
                                            <RiDashboardFill />
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li

                                        >
                                            Logout
                                            <FiLogOut />
                                        </li>
                                    </Link>
                                </ul>

                                {/* for mobile view */}
                                <div className="mobile_menu_bar">
                                    <div
                                        className="mobile_menu"
                                        onClick={handleMenuBar}
                                    >
                                        <IoMenu size={30} />
                                    </div>
                                    <ul
                                        className={`mobile_ul ${
                                            isMobile ? 'open' : ''
                                        }`}
                                    >
                                        <Link to="/user/home">
                                            <li>
                                                Home <TiHome />
                                            </li>
                                        </Link>
                                        <Link to="/user/dashboard">
                                            <li>
                                                Dashboard
                                                <RiDashboardFill />
                                            </li>
                                        </Link>
                                        <Link to="/">
                                            <li   onClick={() =>
                                                setIsMobile((curr) => !curr)
                                            }>
                                                Logout
                                                <FiLogOut />
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </>
                        )}
                    </nav>
                </>
            )}
        </>
    );
};

export default Navbar;
