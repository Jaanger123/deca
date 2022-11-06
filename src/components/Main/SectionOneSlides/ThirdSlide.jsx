import TemplateSlide from './TemplateSlide';
import React from 'react';

import './Slides.scss';

const ThirdSlide = () => {
    return (
        <div className="hm-slide hm-slide-one">
            <TemplateSlide
                slideImg={require('../../../assets/images/people.svg').default}
                imgAlt="People"
            >
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Aliquam gravida fringilla fringilla. In pellentesque magna
                    ante, ac vulputate nibh imperdiet a.
                </p>
                <p>
                    Nam interdum arcu sed magna vulputate, ut maximus mi
                    sollicitudin.
                </p>
            </TemplateSlide>
        </div>
    );
};

export default ThirdSlide;
