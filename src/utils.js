export const numberPattern = (code, number, prevNumber) => {
    const re = /^[0-9()\- ]+$/g;
    const format = code === '+996 ' ? [13, 14, 9, 12] : [14, 15, 10, 13];

    if (re.test(number) || number.length === 0) {
        if (number.length > format[0]) {
            return code + number.slice(0, format[1]);
        } else if (number.length === 1 && number.length > prevNumber.length) {
            return code + '(' + number;
        } else if (number.length === 5 && number.length > prevNumber.length) {
            return (
                code +
                number.slice(0, number.length - 1) +
                ') ' +
                number[number.length - 1]
            );
        } else if (number.length === 4 && number.length > prevNumber.length) {
            return code + number + ')';
        } else if (number.length === 6 && number.length > prevNumber.length) {
            return (
                code +
                number.slice(0, number.length - 1) +
                ' ' +
                number[number.length - 1]
            );
        } else if (
            number.length === format[2] &&
            number.length > prevNumber.length
        ) {
            return (
                code +
                number.slice(0, number.length - 1) +
                '-' +
                number[number.length - 1]
            );
        } else if (
            number.length === format[3] &&
            number.length > prevNumber.length
        ) {
            return (
                code +
                number.slice(0, number.length - 1) +
                '-' +
                number[number.length - 1]
            );
        }

        return code + number;
    }

    return code + prevNumber;
};
