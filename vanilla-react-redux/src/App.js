import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/actions';

function App() {
  const accountState = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className='App'>
      <h1>{accountState}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw 500</button>
    </div>
  );
}

export default App;
