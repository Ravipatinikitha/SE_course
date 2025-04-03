import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { FaBars, FaHome, FaBus, FaMap, FaBell, FaQuestionCircle, FaComment } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    // Page Titles Based on Route
    const pageTitles = {
        "/": "Home",
        "/bus-schedule": "Bus Schedule",
        "/map": "Map",
        "/notifications": "Notifications",
        "/faq": "FAQ",
        "/feedback": "Feedback",
        "/reminder": "Reminder",
    };

    // Get the current page title or default to "Bus Scheduling App"
    const currentTitle = pageTitles[location.pathname] || "Upcoming Buses";

    return (
        <div className="navbar">
            <div className="menu-container" ref={menuRef}>
                <FaBars className="menu-icon" onClick={toggleMenu} />
                {menuOpen && (
                    <div className="nav-links">
                        <Link to="/student-dashboard" onClick={() => setMenuOpen(false)}><FaHome className="icon" /> Home</Link>
                        <Link to="/bus-schedule" onClick={() => setMenuOpen(false)}><FaBus className="icon" /> Bus Schedule</Link>
                        <Link to="/map" onClick={() => setMenuOpen(false)}><FaMap className="icon" /> Map</Link>
                        <Link to="/notifications" onClick={() => setMenuOpen(false)}><FaBell className="icon" /> Notifications</Link>
                        <Link to="/faq" onClick={() => setMenuOpen(false)}><FaQuestionCircle className="icon" /> FAQ</Link>
                        <Link to="/feedback" onClick={() => setMenuOpen(false)}><FaComment className="icon" /> Feedback</Link>
                    </div>
                )}
            </div>

            <h1 className="navbar-title">{currentTitle}</h1>
        </div>
    );
}

export default Navbar;
