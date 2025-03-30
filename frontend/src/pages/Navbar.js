import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaHome, FaBus, FaMap, FaBell, FaQuestionCircle, FaComment, FaClock } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Mapping paths to page titles
    const pageTitles = {
        "/home": "Home",
        "/bus-schedule": "Bus Schedule",
        "/map": "Map",
        "/notifications": "Notifications",
        "/faq": "FAQ",
        "/feedback": "Feedback",
        "/reminder": "Add Reminder", // Changed to "Add Reminder"
    };

    // If the user is on /bus-schedule, show "Bus Schedule | Add Reminder"
    const currentTitle =
        location.pathname === "/bus-schedule"
            ? "Bus Schedule | Add Reminder"
            : pageTitles[location.pathname] || "Bus Scheduling App";

    return (
        <div className="navbar">
            <FaBars className="menu-icon" onClick={toggleMenu} />
            <h1 className="navbar-title">{currentTitle}</h1>

            {menuOpen && (
                <div className="nav-links">
                    <Link to="/home" onClick={closeMenu}>
                        <FaHome className="icon" /> Home
                    </Link>
                    <Link to="/bus-schedule" onClick={closeMenu}>
                        <FaBus className="icon" /> Bus Schedule
                    </Link>
                    <Link to="/reminder" onClick={closeMenu}>
                        <FaClock className="icon" /> Add Reminder
                    </Link>
                    <Link to="/map" onClick={closeMenu}>
                        <FaMap className="icon" /> Map
                    </Link>
                    <Link to="/notifications" onClick={closeMenu}>
                        <FaBell className="icon" /> Notifications
                    </Link>
                    <Link to="/faq" onClick={closeMenu}>
                        <FaQuestionCircle className="icon" /> FAQ
                    </Link>
                    <Link to="/feedback" onClick={closeMenu}>
                        <FaComment className="icon" /> Feedback
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
