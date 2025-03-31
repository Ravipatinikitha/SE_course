import React from 'react';
import '../assets/styles/FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <div className="faq-item">
                <h3>1. What is the NITC Bus Scheduling System?</h3>
                <p>
                    It is a real-time bus tracking and scheduling system that helps students check bus timings, track buses live, and receive delay notifications.
                </p>
            </div>

            <div className="faq-item">
                <h3>2. How can I track a bus in real-time?</h3>
                <p>
                    The app provides live tracking on a map, updating every few seconds to show the exact location of buses.
                </p>
            </div>

            <div className="faq-item">
                <h3>3. Will I get notified about delays or cancellations?</h3>
                <p>
                    Yes, you will receive instant push notifications for any bus delays, breakdowns, or schedule changes.
                </p>
            </div>

            <div className="faq-item">
                <h3>4. What should I do if a bus is delayed or overcrowded?</h3>
                <p>
                    The app suggests alternate routes and shows the estimated arrival time for the next available bus.
                </p>
            </div>

            <div className="faq-item">
                <h3>5. How can I report an issue with the bus service?</h3>
                <p>
                    You can submit feedback through the app to report delays, overcrowding, or any other concerns.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
