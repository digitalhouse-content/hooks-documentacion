import React from 'react';
import { useState } from 'react';

// Demostracion de useState
const getInitialCount = () => {
  console.log("Obtener initial Count");
  return 28;
}

const Counter = () => {

  console.log("Render Counter");
  
  const [count, setCount] = useState(() => getInitialCount())

  return <Button onClick={() => setCount(count +1)}>+ {count}</Button>
}

const Button = ({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>
}

const AppCounter = () => {

  console.log("Render App");

	return (
		<>
      Counter App
      <br />
      <Counter />
		</>
	);
};

export default AppCounter;