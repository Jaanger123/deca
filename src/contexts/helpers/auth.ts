import {
    EMAIL_REGEXP,
    LOWERCASE_ALPHA_REGEXP,
    NUMERIC_REGEXP,
    PASSWORD_LENGTH_REGEXP,
    UPPERCASE_ALPHA_REGEXP,
} from "utils/consts";

export const validateEmail = (email: string): boolean => {
    return EMAIL_REGEXP.test(email);
};

export const validatePassword = (password: string): string => {
    if (!PASSWORD_LENGTH_REGEXP.test(password)) {
        return "Your password must contain at least 8 characters.";
    } else if (!LOWERCASE_ALPHA_REGEXP.test(password)) {
        return "Your password must contain at least 1 lowercase alphabetical character.";
    } else if (!UPPERCASE_ALPHA_REGEXP.test(password)) {
        return "Your password must contain at least 1 uppercase alphabetical character.";
    } else if (!NUMERIC_REGEXP.test(password)) {
        return "Your password must contain at least 1 numeric character.";
    }

    return "";
};
