import { createStore } from 'redux';
import rnApp from '../reducers/baseReducers';

let store = createStore(rnApp);

export default store;
