export default function CountButton({ setCount, type, locked }) {
  function handleClick(e) {
    setCount((prevCount) => {
      if (type === "plus") {
        const newCount = prevCount + 1;
        if (newCount > 6) {
          return 7;
        }
        return newCount;
      } else {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });
    e.currentTarget.blur();
  }
  return (
    <button
      className="count-btn count-btn-icon"
      onClick={handleClick}
      disabled={locked && type === "plus"}
    >
      {type === "plus" ? "Increase" : "Decrease"}
    </button>
  );
}
