import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { FaBars, FaClipboardList, FaBusAlt } from "react-icons/fa";

function DriverNavbar() {
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
        "/driver-home": "Your Bus",
        "/driver-schedule": "Schedule",
    };

    // Get the current page title or default to "Driver Panel"
    const currentTitle = pageTitles[location.pathname] || "Driver Panel";

    return (
        <div className="navbar">
            <div className="menu-container" ref={menuRef}>
                <FaBars className="menu-icon" onClick={toggleMenu} />
                {menuOpen && (
                    <div className="nav-links">
                        <Link to="/driver-home" onClick={() => setMenuOpen(false)}>
                            <FaClipboardList className="icon" /> Home
                        </Link>
                        <Link to="/driver-schedule" onClick={() => setMenuOpen(false)}>
                            <FaBusAlt className="icon" /> Bus Schedule
                        </Link>
                    </div>
                )}
            </div>

            <h1 className="navbar-title">{currentTitle}</h1>
        </div>
    );
}

export default DriverNavbar;
