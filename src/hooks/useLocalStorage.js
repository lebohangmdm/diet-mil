import { useEffect, useState } from "react";

const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(function () {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }),
    [key, value];

  return [value, setValue];
};

export default useLocalStorage;
