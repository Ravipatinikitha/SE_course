import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/styles/FAQ.css';

const Feedback = () => {
    const [ratings, setRatings] = useState({
        navigation: 0,
        scheduleInfo: 0,
        notifications: 0,
        speed: 0,
        experience: 0
    });

    const [comment, setComment] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const [promptMessage, setPromptMessage] = useState('');

    const navigate = useNavigate(); 

    const handleRatingChange = (rating, field) => {
        setRatings({ ...ratings, [field]: rating });
    };

    const handleSubmit = () => {
        const allRatingsFilled = Object.values(ratings).every(value => value > 0);
        const hasComment = comment.trim().length > 0;

        if (!allRatingsFilled) {
            setPromptMessage('Please rate all questions before submitting.');
            setShowPrompt(true);
            setTimeout(() => setShowPrompt(false), 3000);
            return;
        }

        if (!hasComment) {
            setPromptMessage('Please provide a comment before submitting.');
            setShowPrompt(true);
            setTimeout(() => setShowPrompt(false), 3000);
            return;
        }

        // Submit logic here
        console.log('Submitted feedback:', { ...ratings, comment });

        setPromptMessage('Feedback submitted successfully!');
        setShowPrompt(true);

        // Reset form
        setRatings({
            navigation: 0,
            scheduleInfo: 0,
            notifications: 0,
            speed: 0,
            experience: 0
        });
        setComment('');

        // Redirect after short delay
        setTimeout(() => {
            setShowPrompt(false);
            navigate('/student-dashboard'); 
        }, 1500);
    };

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
        <div className="faq-container">
            <div className="faq-scrollable">
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

                {/* Comments Section */}
                <div className="any-doubts">
                    <h3>Comments</h3>
                    <textarea
                        placeholder="Add comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            {showPrompt && (
                <div className="confirmation-popup">{promptMessage}</div>
            )}
        </div>
    );
};

export default Feedback;
