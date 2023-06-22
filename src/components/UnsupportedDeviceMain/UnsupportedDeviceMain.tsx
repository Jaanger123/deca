import bottomRightCorner from 'assets/images/not-found-bottom-right.svg';
import bottomLeftCorner from 'assets/images/not-found-bottom-left.svg';
import topRightCorner from 'assets/images/not-found-top-right.svg';
import topLeftCorner from 'assets/images/not-found-top-left.svg';
import errorBug from 'assets/images/error-bug.svg';

import './UnsupportedDeviceMain.scss';

const UnsupportedDeviceMain = () => {
    return (
        <div className="unsupported-device">
            <img id="top-left-corner" src={topLeftCorner} alt="pixels" />
            <img id="top-right-corner" src={topRightCorner} alt="pixels" />
            <img id="bottom-left-corner" src={bottomLeftCorner} alt="pixels" />
            <img
                id="bottom-right-corner"
                src={bottomRightCorner}
                alt="pixels"
            />
            <div className="unsupported-device-message">
                <img src={errorBug} alt="error bug" />
                <h2>Sorry ;( our site does not support this device</h2>
            </div>
        </div>
    );
};

export default UnsupportedDeviceMain;
