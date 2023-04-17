import { headerText, bodyText } from './helper/contentData';
import HeaderTemplate from 'HeaderTemplate';

import './CivicEngagementMain.scss';

const CivicEngagementMain = () => (
    <main className="civic-main">
        <HeaderTemplate
            title={headerText.title}
            description={headerText.description}
            anchorLink={'#civic-us'}
        />
        <section className="civic-content">
            <div className="civic-container" id="civic-us">
                <div className="civic-civic-engagement">
                    <img
                        src={require('assets/images/earth.svg').default}
                        alt="Earth icon"
                    />
                    <div className="civic-civic-engagement-text">
                        {bodyText.firstBlock.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
                <div className="civic-card-wrapper">
                    <p className="civic-subtitle">
                        {bodyText.secondBlock.title}
                    </p>
                    <div className="civic-contribution-to-society">
                        <p>{bodyText.secondBlock.description}</p>
                    </div>
                </div>
                <div className="civic-card-wrapper">
                    <p className="civic-subtitle">
                        {bodyText.thirdBlock.title}
                    </p>
                    <div className="civic-how-we-help">
                        <p>{bodyText.thirdBlock.description}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default CivicEngagementMain;
