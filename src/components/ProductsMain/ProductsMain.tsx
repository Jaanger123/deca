import GameSetList from 'components/GameSetList';
import HeaderTemplate from 'HeaderTemplate';

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
                <GameSetList />
            </div>
        </div>
    );
};

export default ProductsMain;
