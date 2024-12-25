import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/user/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";
import LocationPage from "./pages/user/locationPage/Location";
import Login from "./components/auth/login";

const App = () => {
  return (
    <Router>
      <NavBarWrapper />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/location" element={<LocationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Single Navbar for all pages
const NavBarWrapper = () => {
  const location = useLocation();
  const path = location.pathname;

  let navbarProps = {
    isLogin: false,
    isNotFound: false,
    isAdmin: false,
  };

  if (path === "/") {
    navbarProps.isLogin = true; // Landing page
  } else if (path.startsWith("/user")) {
    navbarProps.isAdmin = false; // User pages
  } else if (path.startsWith("/admin")) {
    navbarProps.isAdmin = true; // Admin pages
  } else {
    navbarProps.isNotFound = true; // NotFound or wildcard pages
  }

  return <Navbar {...navbarProps} />;
};

export default App;
