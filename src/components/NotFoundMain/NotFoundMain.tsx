import bottomRightCorner from 'assets/images/not-found-bottom-right.svg';
import bottomLeftCorner from 'assets/images/not-found-bottom-left.svg';
import topRightCorner from 'assets/images/not-found-top-right.svg';
import topLeftCorner from 'assets/images/not-found-top-left.svg';
import notFound from 'assets/images/not-found.svg';
import { HOME_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './NotFoundMain.scss'; // ! PATH

const NotFoundMain = () => {
    return (
        <div className="not-found">
            <img id="top-left-corner" src={topLeftCorner} alt="pixels" />
            <img id="top-right-corner" src={topRightCorner} alt="pixels" />
            <img id="bottom-left-corner" src={bottomLeftCorner} alt="pixels" />
            <img
                id="bottom-right-corner"
                src={bottomRightCorner}
                alt="pixels"
            />
            <img
                className="not-found-error"
                src={notFound}
                alt="page not found"
            />
            <h2>Something went wrong...</h2>
            <p>
                Sorry, the page you’re looking for doesn’t exist or there is a
                problem in your connection.
            </p>
            <Link to={HOME_ROUTE}>
                <button>Return home</button>
            </Link>
        </div>
    );
};

export default NotFoundMain;
