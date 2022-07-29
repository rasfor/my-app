export const required = value => {
    if (value) return undefined;
    return "The field is required";
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length < maxLength) return undefined;
    return `The maximum symbols is ${maxLength}`;
}