import React from 'react';

import './Slides.scss';

const TemplateSlide = ({ children, slideImg, imgAlt }) => {
    return (
        <>
            <div className="hm-slide-text">{children}</div>
            <img src={slideImg} alt={imgAlt} />
        </>
    );
};

export default TemplateSlide;
