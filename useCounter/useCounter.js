import { useState } from 'react';

export default function useCounter(initialState = 10) {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };
  console.log(counter);
  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
