import './PopupModal.scss';

interface IPopupModalProps {
    errorTitle?: string;
    buttonMessage?: string;
    // delay?: number;
    errorMessage: string;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal = ({
    errorTitle = 'Oops, something went wrong...',
    buttonMessage = 'Got it',
    // delay = 4000,
    errorMessage,
    showPopup,
    setShowPopup,
}: IPopupModalProps) => {
    // const popupTimeout = setTimeout(() => {
    //     setShowPopup(false);
    // }, delay);

    const closePopup = () => {
        // clearTimeout(popupTimeout);
        setShowPopup(false);
    };

    return (
        <div className={`popup ${showPopup ? '' : 'show'}`}>
            <img
                src={require('../../assets/images/close.svg').default}
                alt="Close"
                onClick={closePopup}
            />
            <div className="popup-text">
                <h4>{errorTitle}</h4>
                <p>{errorMessage}</p>
            </div>
            <div className="popup-button">
                <button onClick={closePopup}>{buttonMessage}</button>
            </div>
        </div>
    );
};

export default PopupModal;
