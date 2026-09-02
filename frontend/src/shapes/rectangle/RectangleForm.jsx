function RectangleForm({length, width, setLength, setWidth}){
    return (
        <div>
            <label>Length:</label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
            <br/>
            <label>Width:</label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
    )
}
export default RectangleForm;