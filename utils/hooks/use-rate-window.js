import { useState } from "react";

export function useRateWindow() {
  const [isRating, setIsRating] = useState();

  const toggleIsRating = () => setIsRating((oldState) => !oldState);

  return {
    isRating,
    toggleIsRating,
  };
}
