import { useState, useEffect } from 'react';

const useDebounce = (
  value: string | number | number[] | boolean, delay = 500,
): string | number | number[] | boolean => {
  const [debouncedValue, setDebouncedValue] = useState<string | number | number[] | boolean>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value],
  );

  return debouncedValue;
};

export default useDebounce;
