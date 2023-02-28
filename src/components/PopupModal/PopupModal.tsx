import { useEffect } from 'react';
import { BTN_VARIANT_ERROR, BTN_VARIANT_GREET } from 'utils/consts';
import './PopupModal.scss';

interface IPopupModalProps {
    title?: string;
    buttonMessage?: string;
    variant?: string;
    delay?: boolean;
    delayTime?: number;
    message: string;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal = ({
    title = 'Oops, something went wrong...',
    message = 'We are faced with unexpected issues ;(',
    buttonMessage = 'Got it',
    variant = BTN_VARIANT_ERROR,
    delay = false,
    delayTime = 4000,
    showPopup,
    setShowPopup,
}: IPopupModalProps) => {
    useEffect(() => {
        if (delay && showPopup === true) {
            setTimeout(() => {
                setShowPopup(false);
            }, delayTime);
        }
    }, [showPopup]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className={`popup ${showPopup ? '' : 'show'}`}>
            <img
                className="popup-close"
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
                        className="popup-puzzle"
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
