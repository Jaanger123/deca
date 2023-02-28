import { SIGN_UP_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './HeaderTemplate.scss';

interface IHeaderTemplateProps {
    title: string;
    description: string;
    productsPage?: boolean;
    anchorLink?: string | null;
}

const HeaderTemplate = ({
    title,
    description,
    productsPage = false,
    anchorLink = null,
}: IHeaderTemplateProps) => (
    <section className="header-template">
        <div
            className={`header-template-text ${productsPage ? 'products' : ''}`}
        >
            <h1 className={productsPage ? 'products' : ''}>{title}</h1>
            <p className={productsPage ? 'products' : ''}>{description}</p>
            {productsPage && (
                <Link to={SIGN_UP_ROUTE}>
                    <button>Register now</button>
                </Link>
            )}
        </div>
        {anchorLink && (
            <a href={anchorLink}>
                <div className="civic-arrow">
                    <img
                        src={require('assets/images/arrow.svg').default}
                        alt="Arrow icon"
                    />
                </div>
            </a>
        )}
    </section>
);

export default HeaderTemplate;
