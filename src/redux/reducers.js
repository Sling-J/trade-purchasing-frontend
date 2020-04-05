import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";

import authReducer, {moduleName as authModule} from "../ducks/Auth";

export default history => combineReducers({
   router: connectRouter(history),
   [authModule]: authReducer
});