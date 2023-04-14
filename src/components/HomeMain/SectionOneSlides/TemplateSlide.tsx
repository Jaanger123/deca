import './Slides.scss';

interface ITemplateSlideProps {
    children: React.ReactNode;
    slideImg: string;
    imgAlt: string;
}

const TemplateSlide = ({ children, slideImg, imgAlt }: ITemplateSlideProps) => {
    return (
        <>
            <div className="hm-so-slide-text">{children}</div>
            <div className="hm-so-slide-img">
                <img src={slideImg} alt={imgAlt} />
            </div>
        </>
    );
};

export default TemplateSlide;
