
import { useState, useRef } from "react";
import { useReducer } from "react";

const changeState = (state, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

function Home() {
  const [count, setCount] = useState(0);
  const inputNumber = useRef();
  const [state, dispatch] = useReducer(changeState, 0);

  return (
    <div className='flex flex-col h-screen justify-center items-center bg-gray-200'>
      <h1 className="text-5xl mb-8 text-blue-500 font-extrabold">{state}</h1>
      <div className='flex gap-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
    </div>
  );
}

export default Home;