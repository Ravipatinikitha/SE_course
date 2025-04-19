import React, { useState } from 'react';
import '../../assets/styles/FAQ.css';

const FAQ = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [customQuestions, setCustomQuestions] = useState([]);

  const handleOpenPrompt = () => {
    setIsPromptOpen(true);
  };

  const handleClosePrompt = () => {
    setIsPromptOpen(false);
    setInputValue('');
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setCustomQuestions((prev) => [...prev, inputValue.trim()]);
      handleClosePrompt();
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-scrollable">
        {/* Predefined Questions */}
        <div className="question">
          <h3>1. What is the NITC Bus Scheduling System?</h3>
          <p>
            It is a real-time bus tracking and scheduling system that provides live tracking of buses, updates on delays, and notifications.
          </p>
        </div>

        <div className="question">
          <h3>2. How can I track a bus in real-time?</h3>
          <p>
            The app provides live tracking on a map, updating every few seconds to show the exact location of your bus.
          </p>
        </div>

        <div className="question">
          <h3>3. Will I get notified about delays or cancellations?</h3>
          <p>
            Yes, you will receive instant push notifications for any bus delays, breakdowns, or schedule changes.
          </p>
        </div>

        <div className="question">
          <h3>4. What should I do if a bus is delayed or overcrowded?</h3>
          <p>
            The app suggests alternate routes and shows the estimated arrival time for the next available bus.
          </p>
        </div>

        <div className="question">
          <h3>5. How can I report an issue with the bus service?</h3>
          <p>
            You can submit feedback through the app to report delays, overcrowding, or any other concerns.
          </p>
        </div>

        {/* Custom Submitted Questions */}
        {customQuestions.map((q, idx) => (
          <div key={`custom-${idx}`} className="question">
            <h3>6. {q}</h3>
            <p><i>Thanks for your question! We’ll get back to you soon.</i></p>
          </div>
        ))}

        {/* Any Doubts Section */}
        <div className="any-doubts">
          <h3>Any Doubts?</h3>
          <button onClick={handleOpenPrompt}>Ask a Question</button>
        </div>
      </div>

      {/* Prompt Modal */}
      {isPromptOpen && (
        <div className="prompt-overlay">
          <div className="prompt-box">
            <h4>Type your question</h4>
            <textarea
              placeholder="Your question here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="prompt-actions">
              <button className="cancel-btn" onClick={handleClosePrompt}>Cancel</button>
              <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
