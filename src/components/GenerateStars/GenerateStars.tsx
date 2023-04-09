import filledStar from 'assets/images/filled-star.svg';

interface IGenerateStarsProps {
    difficulty: number;
    className: string;
}

const GenerateStars = ({ difficulty, className }: IGenerateStarsProps) => {
    return (
        <div className={className}>
            {[...Array(difficulty)].map((_, index) => (
                <img key={index} src={filledStar} alt="filled star" />
            ))}
        </div>
    );
};

export default GenerateStars;
