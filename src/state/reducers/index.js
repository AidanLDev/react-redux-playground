import { combineReducers } from 'reduex';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
