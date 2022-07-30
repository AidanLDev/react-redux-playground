import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/slice/counter';
import { useState } from 'react';

function App() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          The <code>Count</code> is: {count}
        </p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div className='flex'>
          <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
            Increment By:
          </button>
          <input
            type='number'
            onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
