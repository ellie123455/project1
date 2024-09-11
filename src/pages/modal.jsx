import React from 'react';
// import './Login.css'; // Assuming you're using the same CSS file for simplicity

const Modal = () => {
    return (
        <div className="modal">
            <div className="icon-container">
                <img src="/path-to-icon.png" alt="Success Icon" className="success-icon" />
            </div>
            <div className="modal-content">
                <h2>Modal Title</h2>
                <p>Modal description text goes here.</p>
                <button>Close</button>
            </div>
        </div>
    );
};

export default Modal;