export function isValidNumber(value) {
    if (typeof value === 'boolean' || value === '' || value === null || value === undefined) {
        return false;
    }
    const num = Number(value);
    return !isNaN(num) && Number.isFinite(num);
}

export function isValidPositiveNumber(value) {
    return isValidNumber(value) && Number(value) > 0;
}