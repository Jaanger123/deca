import { EMAIL_REGEXP } from './consts'; // ! ABSOLUTE OR RELATIVE PATH?

export const validateEmail = (email: string): boolean => {
    return EMAIL_REGEXP.test(email);
};
