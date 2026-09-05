export function isValidPositiveNumber(value) {
    if(value === null || value === undefined || value === "") {
        return false;
    }
    const num = Number(value);
    return Number.isFinite(num) && num > 0;
}

export function validatePositiveNumber(value, fieldName) {
    if(value === null || value === undefined || value === "") {
        return `${fieldName} is required.`;
    }

    const num = Number(value);
    if(!Number.isFinite(num)) {
        return `${fieldName} must be a valid number.`;
    }
    if(num <= 0) {
        return `${fieldName} must be a greater than 0.`;

    }

    return null; // No error
}