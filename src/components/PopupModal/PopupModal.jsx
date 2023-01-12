import React from 'react';

import './PopupModal.scss';

const PopupModal = ({ message, showPopup, setShowPopup }) => {
    const popupStyles = { top: '-200px' };
    console.log(showPopup);

    return (
        <div className="popup" style={showPopup ? {} : popupStyles}>
            <img
                src={require('../../assets/images/close.svg').default}
                alt="Close"
                onClick={() => setShowPopup(false)}
            />
            <h4>{message}</h4>
        </div>
    );
};

export default PopupModal;
