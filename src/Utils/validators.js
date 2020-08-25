export const required = (value) => {
    if (!value) return `Field is required`;
    else return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`;
    else return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    else return undefined;
}

export const letterNumberCreator = (value) => {
    if (!value.match(/([A-Z])/) ||
        !value.match(/([a-z])/) ||
        !value.match(/([0-9])/)
    ) return `Field must include uppercase and number`;
    else return undefined;
}