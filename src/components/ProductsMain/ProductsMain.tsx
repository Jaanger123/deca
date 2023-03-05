import GameSetList from 'components/GameSetList';
import HeaderTemplate from 'HeaderTemplate';

import filledStar from 'assets/images/filled-star.svg';
import star from 'assets/images/star.svg';

import './ProductsMain.scss';

const ProductsMain = () => {
    const headerTitle = 'A new way to perceive games';
    const headerDescription =
        'Learn more about our game sets and choose the perfect one to play with your friends and family!';

    return (
        <div className="products-main">
            <HeaderTemplate
                title={headerTitle}
                description={headerDescription}
                productsPage={true}
            />
            <div className="products-content">
                <div className="products-container">
                    <GameSetList />
                    <div className="products-rating">
                        <div className="products-rating-text">
                            <h2>Get to know our system!</h2>
                            <p>
                                The more stars a game set has - the harder it is
                                to complete it with you and your friends!
                            </p>
                        </div>
                        <div className="products-rating-stars">
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={filledStar} alt="Filled star" />
                            <img src={filledStar} alt="Filled star" />
                            <img src={filledStar} alt="Filled star" />
                        </div>
                    </div>
                    <GameSetList />
                </div>
            </div>
        </div>
    );
};

export default ProductsMain;
