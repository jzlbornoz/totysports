import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {

  const [storedValue, setStoredValue] = useState<T>(() => {

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading value from localStorage for key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error saving value to localStorage for key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;