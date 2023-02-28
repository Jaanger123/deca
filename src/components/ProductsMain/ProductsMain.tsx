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
            <h1>Products</h1>
        </div>
    );
};

export default ProductsMain;
