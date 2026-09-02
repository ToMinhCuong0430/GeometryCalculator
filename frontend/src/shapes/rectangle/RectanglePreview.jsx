function RectanglePreview({ length, width }) {
    return (
        <svg width="300" height="300">
            <rect
                x={150 - length / 2}
                y={150 - width / 2}
                width={length}
                height={width}
                fill="lightblue"
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
}

export default RectanglePreview;