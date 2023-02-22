import { useState } from "react";

export function useInputSearch() {
  const [inputValue, setInputValue] = useState("");
  const [isFocusing, setIsFocusing] = useState(false);

  const changeHandler = (e) => setInputValue(e.target.value);
  const focusHandler = () => setIsFocusing(true);
  const blurHandler = () => setTimeout(() => setIsFocusing(false), 500);

  return {
    inputValue,
    isFocusing,
    focusHandler,
    blurHandler,
    changeHandler,
  };
}
