import { createStore } from 'reduex';
import reducers from './reducers/index';

const store = createStore(reducers, {});
