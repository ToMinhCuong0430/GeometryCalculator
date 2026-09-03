export function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    return {
        diameter,
        circumference,
        area
    };
}

export function calculateRectangle(length, width) {
    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    return {
        perimeter,
        area,
        diagonal
    };
}

export function calculateTriangle(base, height) {
    const area = 0.5 * base * height;

    return {
        area
    };
}