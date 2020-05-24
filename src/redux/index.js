import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

import reducers from './reducers';

const enhancer = applyMiddleware(thunkMiddleware);

const store = createStore(
   reducers,
   composeWithDevTools(enhancer)
);

export default store;