import React, { useState } from 'react';
import '../../assets/styles/Feedback.css';

const Feedback = () => {
    const [ratings, setRatings] = useState({
        navigation: 0,
        scheduleInfo: 0,
        notifications: 0,
        speed: 0,
        experience: 0
    });

    const handleRatingChange = (rating, field) => {
        setRatings({ ...ratings, [field]: rating });
    };

    // Star Component
    const StarRating = ({ value, onChange }) => (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`star ${i < value ? 'filled' : ''}`}
                    onClick={() => onChange(i + 1)}
                >
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <div className="feedback">
            {/* Scrollable Content */}
            <div className="feedback-scrollable">
                <div className="question">
                    <p>1. How easy is it to navigate the bus scheduling app?</p>
                    <StarRating
                        value={ratings.navigation}
                        onChange={(rating) => handleRatingChange(rating, 'navigation')}
                    />
                </div>

                <div className="question">
                    <p>2. How clear and understandable is the bus schedule information?</p>
                    <StarRating
                        value={ratings.scheduleInfo}
                        onChange={(rating) => handleRatingChange(rating, 'scheduleInfo')}
                    />
                </div>

                <div className="question">
                    <p>3. How useful are the notifications for bus delays or cancellations?</p>
                    <StarRating
                        value={ratings.notifications}
                        onChange={(rating) => handleRatingChange(rating, 'notifications')}
                    />
                </div>

                <div className="question">
                    <p>4. How responsive is the app in terms of loading speed and updates?</p>
                    <StarRating
                        value={ratings.speed}
                        onChange={(rating) => handleRatingChange(rating, 'speed')}
                    />
                </div>

                <div className="question">
                    <p>5. How satisfied are you with the overall user experience of the app?</p>
                    <StarRating
                        value={ratings.experience}
                        onChange={(rating) => handleRatingChange(rating, 'experience')}
                    />
                </div>

                <textarea placeholder="Add Comment"></textarea>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Feedback;
