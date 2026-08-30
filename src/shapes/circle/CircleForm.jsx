function CircleForm({ radius, setRadius}){
    return(
        <div>
            <label>Radius:</label>

            <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
            
        </div>
    )
}
export default CircleForm;