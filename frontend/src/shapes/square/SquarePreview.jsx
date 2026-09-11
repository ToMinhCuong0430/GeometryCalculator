function SquarePreview({ side }) {
    return (
        <svg width="300" height="300">
            <rect
                x={150 - side / 2}
                y={150 - side / 2}
                width={side}
                height={side}
                fill="lightblue"
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SquarePreview;