import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { userAuthReducer, initialUserData } from '../ducks/reducers.js';

export default createStore(
    initialUserData,
    userAuthReducer,
    devToolsEnhancer(),
);