import { HOME_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './OrderCompleteMain.scss';

const OrderCompleteMain = () => {
    return (
        <div className="order-complete-background">
            <div className="order-complete">
                <img
                    src={require('assets/images/order-complete.svg').default}
                    alt="order complete"
                />
                <h2>Your order is complete!</h2>
                <p>
                    You will be receiving a confirmation with order details
                    soon.
                </p>
                <Link to={HOME_ROUTE}>
                    <button>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderCompleteMain;
