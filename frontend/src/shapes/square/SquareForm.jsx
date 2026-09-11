function SquareForm({ side, setSide }) {
  return (
    <div>
        <label>Side:</label>
        <input type="number" value={side} onChange={(e) => setSide(e.target.value)} />
    </div>
    )
}
export default SquareForm;
