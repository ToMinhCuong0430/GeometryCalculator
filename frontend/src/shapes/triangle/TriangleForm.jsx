function TriangleForm({ base, height, setBase, setHeight }){
    return (
        <div>
            <label>Base:</label>
            <input type="number" value={base} onChange={(e) => setBase(e.target.value)} />
            <br/>
            <label>Height:</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
    )
}
export default TriangleForm;