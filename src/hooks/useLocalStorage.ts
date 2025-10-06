import { useCallback, useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const readValue = useCallback((): T => {
    if (!isBrowser) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: failed reading key "${key}"`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readValue]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        if (isBrowser) {
          try {
            window.localStorage.setItem(key, JSON.stringify(nextValue));
          } catch (error) {
            console.warn(`useLocalStorage: failed setting key "${key}"`, error);
          }
        }
        return nextValue;
      });
    },
    [key]
  );

  return [storedValue, setValue] as const;
};
