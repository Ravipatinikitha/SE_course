import React from 'react';
import '../assets/styles/Notifications.css';

const Notifications = () => (
    <div className="notifications">
        <h2>Notifications</h2>
        <ul>
            <li>LH Bus is delayed by 10 mins</li>
            <li>Reminder: MHB will be arriving in 5 minutes at MHB</li>
            <li>LH(SOMS) Bus is cancelled today due to breakdown</li>
        </ul>
    </div>
);

export default Notifications;