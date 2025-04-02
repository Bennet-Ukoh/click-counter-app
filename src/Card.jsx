import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 7 ? true : false;

  useEffect(() => {
    function handleKeydown(e) {
      if (e.code === "Space") {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount > 6) {
            return 7;
          }
          return newCount;
        });
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
