import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentHome"; 
import DriverDashboard from "./pages/Driver/DriverDashboard"; 
import BusSchedule from "./pages/student/BusSchedule";
import Map from "./pages/MapPage";
import Notifications from "./pages/student/Notifications";
import FAQ from "./pages/student/FAQ";
import Feedback from "./pages/student/Feedback";
import Reminder from "./pages/student/Reminder";
import Navbar from "./pages/Navbar";
import LoginPage from "./pages/LoginPage";
import BusCard from "./pages/student/Buscard";

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
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/bus-schedule" element={<BusSchedule />} />
                <Route path="/map" element={<Map />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/reminder" element={<Reminder />} />
                <Route path="/buscard" element={<BusCard />} />
                <Route path="/driver-dashboard" element={<DriverDashboard />} />
            </Routes>
        </>
    );
};

export default App;
