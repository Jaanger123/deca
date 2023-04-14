import TemplateSlide from './TemplateSlide';

import './Slides.scss';
// const someName = [
//     {
//         title: 'dfasoidfjalskdfjalskjdfahls',
//         id: 'victory-monument',
//         desc: ['fasdfjkashdfljakshdflajkshdflajksdhf', "dfajshdflkjahsdlfjhasdlfjahsdlfjkhasdjk"]
//     }
// ]

const FirstSlide = () => {
    return (
        <div className="hm-so-slide hm-so-slide-first">
            <TemplateSlide
                slideImg={
                    require('../../../assets/images/victory-monument.svg')
                        .default
                }
                imgAlt="People"
            >
                {/* someName.map(item => {
                    return <>
                    <h2>{item.title}</h2>
                    {item.desc.map(text => <p>{text}</p>)}
                    </>
                })} */}
                <h2>Welcome to Our Adventure</h2>
                <p>
                    Welcome to our D&D board game service centered around Kyrgyz
                    culture and progress! We are thrilled to have you join us on
                    this epic journey through the beauty, history, and mythology
                    of Kyrgyzstan.
                </p>
            </TemplateSlide>
        </div>
    );
};

export default FirstSlide;
