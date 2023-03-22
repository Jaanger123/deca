export const ORDERS_COLLECTION = 'orders';
export const GAMESETS_COLLECTION = 'gameSets';

export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';
export const CIVIC_ENGAGEMENT_ROUTE = '/civic-engagement';
export const PRODUCTS_ROUTE = '/products';
export const GAMESET_DETAIL = '/game-sets/:gameSetId';
export const GAME_ORDER_ROUTE = '/game-order';
export const SIGN_UP_ROUTE = '/sign-up';
export const SIGN_IN_ROUTE = '/sign-in';

export const EMAIL_REGEXP =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const PASSWORD_LENGTH_REGEXP = /(?=.{8,})/;
export const LOWERCASE_ALPHA_REGEXP = /^(?=.*[a-z])/;
export const UPPERCASE_ALPHA_REGEXP = /^(?=.*[A-Z])/;
export const NUMERIC_REGEXP = /^(?=.*[0-9])/;

export const BTN_VARIANT_ERROR = 'error';
export const BTN_VARIANT_GREET = 'greet';

export const GAMESET_CONTEXT_ACTIONS = {
    GET_GAMESETS: 'GET_GAMESETS',
};

export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const SVG_TYPES = {
    INSTAGRAM: 'INSTAGRAM',
    TWITTER: 'TWITTER',
    FACEBOOK: 'FACEBOOK',
};
