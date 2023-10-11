import React, { useState, useEffect } from 'react';
import '../Styles/Popup.css'

const PopupComponent = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show the popup after 15 seconds
        const timeout = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className={`popup ${showPopup ? 'visible' : ''}`}>
            <div className="popup-content">
                <button className="close-button" onClick={closePopup}>
                    Close
                </button>
                <h2>Free Consultation</h2>
                <p>Get in touch with us for a free consultation!</p>
                <p>+987654321</p>
            </div>
        </div>
    );
};

export default PopupComponent;
