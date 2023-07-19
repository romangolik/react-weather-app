import { useRef, useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const timer = useRef(null);
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    timer.current = setTimeout(() => setDebounceVal(value), delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [delay, value]);

  return debounceVal;
}
