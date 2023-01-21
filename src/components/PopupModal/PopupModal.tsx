import './PopupModal.scss';

interface IPopupModalProps {
    message: string;
    showPopup: boolean; // ? Should I use certain type for states?
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal = ({ message, showPopup, setShowPopup }: IPopupModalProps) => {
    const popupStyles = { top: '-200px' };

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
