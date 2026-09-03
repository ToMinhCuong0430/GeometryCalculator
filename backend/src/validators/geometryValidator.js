export function isValidNumber(value) {
    return typeof value === 'number' 
    && Number.isFinite(value);
}

export function isValidPositiveNumber(value) {
    return isValidNumber(value) && value > 0;
}