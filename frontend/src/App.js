import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";  
import AdminDashboard from "./components/admin/AdminDashboard";  
import DriverHome from "./pages/Driver/DriverHome";  
import DriverSchedule from "./pages/Driver/DriverSchedule";  
import BusSchedule from "./pages/student/BusSchedule";
import Map from "./pages/MapPage";
import Notifications from "./pages/student/Notifications";
import FAQ from "./pages/student/FAQ";
import Feedback from "./pages/student/Feedback";
import DriverNotifications from "./pages/Driver/Notifications";
import DriverFAQ from "./pages/Driver/FAQ";
import DriverFeedback from "./pages/Driver/Feedback";
import Reminder from "./pages/student/Reminder";
import StudentNavbar from "./pages/StudentNavbar";  
import DriverNavbar from "./pages/DriverNavbar";  
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

    // Define routes where the Navbar should be hidden (e.g., Login)
    const hideNavbarRoutes = ["/", "/login"];


    const driverRoutes = ["/driver-dashboard", "/driver-home", "/driver-schedule","/dnotifications","/dfaq","/dfeedback"];

    
    let NavbarComponent = null;
    if (!hideNavbarRoutes.includes(location.pathname)) {
        NavbarComponent = driverRoutes.includes(location.pathname) ? <DriverNavbar /> : <StudentNavbar />;
    }

    useEffect(() => {
        console.log(`Navigated to: ${location.pathname}`);
    }, [location]);

    return (
        <>
            {NavbarComponent}
            <Routes>
                {/* Login */}
                <Route path="/" element={<LoginPage />} />
                
                {/* Student Routes */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/bus-schedule" element={<BusSchedule />} />
                <Route path="/map" element={<Map />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/feedback" element={<Feedback />} />
                
                <Route path="/reminder" element={<Reminder />} />
                <Route path="/buscard" element={<BusCard />} />
                
                {/* Driver Routes */}

               
                <Route path="/driver-schedule" element={<DriverSchedule />} />

                <Route path="/driver-dashboard" element={<DriverHome />} />
                <Route path="/driver-schedule" element={<DriverSchedule />} />
                <Route path="/dnotifications" element={<DriverNotifications />} />
                <Route path="/dfaq" element={<DriverFAQ />} />
                <Route path="/dfeedback" element={<DriverFeedback />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />


            </Routes>
        </>
    );
};

export default App;
