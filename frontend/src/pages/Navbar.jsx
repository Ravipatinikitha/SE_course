import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { FaBars, FaHome, FaBus, FaMap, FaBell, FaQuestionCircle, FaComment, FaClock } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Page Titles Based on Route
    const pageTitles = {
        "/": "Home",
        "/bus-schedule": "Bus Schedule",
        "/map": "Map",
        "/notifications": "Notifications",
        "/faq": "FAQ",
        "/feedback": "Feedback",
    };

    // Get the current page title or default to "Bus Scheduling App"
    const currentTitle = pageTitles[location.pathname] || "Bus Scheduling App";

    return (
        <div className="navbar">
            <FaBars className="menu-icon" onClick={toggleMenu} />
            <h1 className="navbar-title">{currentTitle}</h1>

            {menuOpen && (
                <div className="nav-links">
                    <Link to="/" onClick={closeMenu}><FaHome className="icon" /> Home</Link>
                    <Link to="/bus-schedule" onClick={closeMenu}><FaBus className="icon" /> Bus Schedule</Link>
                    <Link to="/map" onClick={closeMenu}><FaMap className="icon" /> Map</Link>
                    <Link to="/notifications" onClick={closeMenu}><FaBell className="icon" /> Notifications</Link>
                    <Link to="/faq" onClick={closeMenu}><FaQuestionCircle className="icon" /> FAQ</Link>
                    <Link to="/feedback" onClick={closeMenu}><FaComment className="icon" /> Feedback</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
