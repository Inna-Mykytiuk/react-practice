import { createStore } from 'redux';
import rootRedusers from './reducers';

const store = createStore(rootRedusers)

export default store;
