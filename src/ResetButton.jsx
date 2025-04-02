export default function ResetButton({ setCount }) {
  function handleClickReset(e) {
    setCount(0);
    e.currentTarget.blur();
  }
  return (
    <button className="reset-btn reset-btn-icon" onClick={handleClickReset}>
      Reset
    </button>
  );
}
