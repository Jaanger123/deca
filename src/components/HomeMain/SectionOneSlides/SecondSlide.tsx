import TemplateSlide from './TemplateSlide';

import './Slides.scss';

const SecondSlide = () => {
    return (
        <div className="hm-so-slide hm-so-slide-second">
            <TemplateSlide
                slideImg={require('../../../assets/images/community.jpeg')}
                imgAlt="People"
            >
                <h2>Join our Community</h2>
                <p>
                    Looking to connect with like-minded adventurers? DECA is the
                    perfect place to meet fellow gamers and build new
                    friendships. Whether you're a seasoned veteran or a newcomer
                    to the world of tabletop gaming, you'll find a warm welcome
                    in our vibrant Kyrgyz gaming community.
                </p>
            </TemplateSlide>
        </div>
    );
};

export default SecondSlide;
