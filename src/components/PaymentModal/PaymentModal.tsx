import { ORDERS_COLLECTION, COMPLETE_PAYMENT_ROUTE } from 'utils/consts';
import { sendMessageToReceiver } from 'utils/telegramBotUtils';
import { addDocument } from 'firebaseClients/firestoreClient';
import { useGameSet } from 'contexts/GameSetContextProvider';
import { IGameSetInfo } from 'contexts/helpers/types';
import { useNavigate } from 'react-router-dom';

import './PaymentModal.scss';

interface IPaymentModalProps {
    showPaymentModal: boolean;
    setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
    data: IGameSetInfo;
}

const PaymentModal = ({
    showPaymentModal,
    setShowPaymentModal,
    data,
}: IPaymentModalProps) => {
    const { gameSet } = useGameSet();
    const navigate = useNavigate();
    const modalStyles = { top: '-100%', bottom: '100%' };

    const done = () => {
        setShowPaymentModal(false);

        addDocument(ORDERS_COLLECTION, data);
        sendMessageToReceiver(data);
        navigate(COMPLETE_PAYMENT_ROUTE);
    };

    return (
        <div
            className="payment-modal-wrapper"
            style={!showPaymentModal ? modalStyles : {}}
        >
            <div className="payment-modal">
                <h3>Payment method:</h3>
                <div className="payment-modal-requisites">
                    <img
                        src={require('assets/images/mbank-logo.svg').default}
                        alt="mbank logo"
                    />
                    <img
                        className="payment-modal-qr-code"
                        src={require('assets/images/qr-code.png')}
                        alt="qr code"
                    />
                    <div className="payment-modal-text">
                        <p>
                            To continue, please scan the QR and pay the required
                            amount of money.
                        </p>
                        <p>+996 709 576 751</p>
                    </div>
                    <div className="payment-modal-price-wrapper">
                        <div className="payment-modal-price">
                            <span>Total:</span>
                            <p>{gameSet?.gameSetPrice} KGS</p>
                        </div>
                        <button onClick={done}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
