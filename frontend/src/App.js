import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/StudentHome"; 
import BusSchedule from "./pages/BusSchedule";
import Map from "./pages/MapPage";
import Notifications from "./pages/Notifications";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import Reminder from "./pages/Reminder";
import Navbar from "./pages/Navbar";
import LoginPage from "./pages/LoginPage";
import BusCard from "./pages/Buscard";

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

const AppContent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/"; // Check if it's the login page

    return (
        <>
            {!isLoginPage && <Navbar />} {/* Show Navbar only if NOT on login page */}
            <Routes>
                <Route path="/" element={<LoginPage />} /> {/* Default page is Login */}
                <Route path="/home" element={<Home />} />
                <Route path="/bus-schedule" element={<BusSchedule />} />
                <Route path="/map" element={<Map />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/reminder" element={<Reminder />} />
                <Route path="/buscard" element={<BusCard />} />
            </Routes>
        </>
    );
};

export default App;
