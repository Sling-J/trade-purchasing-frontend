import {appName} from "../config/config";
import {Profile} from "../service";
import {initialState as companyState} from "./Company";

/**
 * Constants
 */

export const moduleName = 'profile';
const prefix = `${appName}/${moduleName}`;
const UPDATE_PROFILE_REQUEST = `${prefix}/UPDATE_PROFILE_REQUEST`;
const UPDATE_PROFILE_SUCCESS = `${prefix}/UPDATE_PROFILE_SUCCESS`;
const UPDATE_PROFILE_FAILURE = `${prefix}/UPDATE_PROFILE_FAILURE`;

/**
 * Reducer
 */

export default (state = companyState, action) => {
   switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
         return {
            ...state,
            loadingOfUpdating: true,
            errorOfUpdating: null
         };

      case UPDATE_PROFILE_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loadingOfUpdating: false,
            errorOfUpdating: null
         };

      case UPDATE_PROFILE_FAILURE:
         return {
            ...state,
            userData: {},
            loadingOfUpdating: false,
            errorOfUpdating: action.error
         };

      default:
         return companyState
   }
}

/**
 * Actions
 */

export const updateProfile = data => {
   const request = () => ({type: UPDATE_PROFILE_REQUEST});
   const success = data => ({type: UPDATE_PROFILE_SUCCESS, payload: data});
   const failure = error => ({type: UPDATE_PROFILE_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Profile.update(data)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.response)))
   };
};