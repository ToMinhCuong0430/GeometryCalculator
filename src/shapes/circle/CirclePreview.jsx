function CirclePreview({ radius }) {
    return (
        <svg width ="300" height = "300">
            <circle 
                cx={150}
                cy={150}
                r={radius}
                fill="none"
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    )
}
export default CirclePreview;