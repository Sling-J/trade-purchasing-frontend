import {combineReducers} from "redux";

import profileReducer, {moduleName as profileModule} from "../ducks/Auth";
import authReducer, {moduleName as authModule} from "../ducks/Profile";
import companyReducer, {moduleName as companyModule} from "../ducks/Company";

export default combineReducers({
   [profileModule]: profileReducer,
   [companyModule]: companyReducer,
   [authModule]: authReducer,
});