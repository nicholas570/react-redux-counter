import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, toggle } from './actions/index';

import './App.css';

function App() {
  const counter = useSelector((state) => state.counter); // counter = key in rootReducer
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(toggle())}>Log in/out</button>

      {isLogged ? <h3>I'm logged in</h3> : <h3>LOGGED OUT!!!</h3>}
    </div>
  );
}

export default App;
