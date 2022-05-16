import { createStore } from 'redux';
import { userAuthReducer, initialState } from '../ducks/reducers.js';

export default createStore(
    userAuthReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);