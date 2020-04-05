import {createStore, applyMiddleware} from "redux";
import {routerMiddleware} from "connected-react-router";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

import reducers from './reducers';
import history from "../config/history";

const enhancer = applyMiddleware(
   thunkMiddleware,
   routerMiddleware(history)
);

const store = createStore(
   reducers(history),
   composeWithDevTools(enhancer)
);

export default store;