function ShapeSelector ({ selectedShape, setSelectedShape }) {
    return (
        <div>
            <label> Choose a shape: </label>
            <select value ={selectedShape} onChange={(e) => setSelectedShape(e.target.value)}>
                <option value="circle">Circle</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
            </select>
        </div>
    )
}
export default ShapeSelector;