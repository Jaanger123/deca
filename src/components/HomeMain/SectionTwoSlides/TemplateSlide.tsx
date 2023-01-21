import './Slides.scss';

interface ITemplateSlideProps {
    children: React.ReactNode[];
    characterImg: string;
    isSecond?: boolean;
}

const TemplateSlide = ({
    children,
    characterImg,
    isSecond,
}: ITemplateSlideProps) => {
    return (
        <>
            <img src={characterImg} alt="Character" />
            {isSecond ? (
                <img
                    src={require('../../../assets/images/character-five.png')}
                    alt="Character"
                    className="second-slide-character-sm"
                />
            ) : null}
            <div className="hm-so-slide-text">
                <h3>NEW</h3>
                {children}
            </div>
        </>
    );
};

export default TemplateSlide;
