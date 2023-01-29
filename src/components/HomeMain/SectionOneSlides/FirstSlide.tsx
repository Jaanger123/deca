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
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Aliquam gravida fringilla fringilla. In pellentesque magna
                    ante, ac vulputate nibh imperdiet a.
                </p>
            </TemplateSlide>
        </div>
    );
};

export default FirstSlide;