export function calculateRectangle(length, width){
    const perimeter = 2 * (length + width);
    const area = length * width;
    return{
        perimeter,
        area
    };
}