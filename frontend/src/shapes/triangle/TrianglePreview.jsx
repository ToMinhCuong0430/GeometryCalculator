function TrianglePreview({ base, height }) {

    const scale = 10;

    const centerX = 150;
    const topY = 50;

    const triangleBase = base * scale;
    const triangleHeight = height * scale;

    return (
        <svg width="300" height="300">

            <polygon
                points={`
                    ${centerX},${topY}
                    ${centerX + triangleBase / 2},${topY + triangleHeight}
                    ${centerX - triangleBase / 2},${topY + triangleHeight}
                `}
                fill="none"
                stroke="black"
                strokeWidth="2"
            />

        </svg>
    );
}

export default TrianglePreview;