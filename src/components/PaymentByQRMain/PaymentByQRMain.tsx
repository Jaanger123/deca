import './PaymentByQRMain.scss';

const PaymentByQRMain = () => {
    return (
        <div className="payment-container">
            <img src={require('./qr-code.jpeg')} alt="qr code" />
        </div>
    );
};

export default PaymentByQRMain;
