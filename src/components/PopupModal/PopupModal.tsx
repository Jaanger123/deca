import { BTN_VARIANT_ERROR, BTN_VARIANT_GREET } from 'utils/consts';
import './PopupModal.scss';

interface IPopupModalProps {
    title?: string;
    buttonMessage?: string;
    variant?: string;
    // delay?: number;
    message: string;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal = ({
    title = 'Oops, something went wrong...',
    buttonMessage = 'Got it',
    variant = BTN_VARIANT_ERROR,
    // delay = 4000,
    message,
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
            <div
                className={`popup-text ${
                    variant === BTN_VARIANT_GREET && 'popup-text-greet'
                }`}
            >
                {variant === BTN_VARIANT_GREET && (
                    <img
                        src={require('../../assets/images/pieces.png')}
                        alt="Puzzle icon"
                    />
                )}
                <h4>{title}</h4>
                <p>{message}</p>
            </div>
            <div
                className={`popup-button ${
                    variant === BTN_VARIANT_GREET && 'popup-button-greet'
                }`}
            >
                <button onClick={closePopup}>{buttonMessage}</button>
            </div>
        </div>
    );
};

export default PopupModal;
