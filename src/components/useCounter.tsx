import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);

  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, increment, decrement };
};
