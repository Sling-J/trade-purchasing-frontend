import {appName} from "../config/config";
import {Profile} from "../service";
import {initialState as companyState} from "./Company";

/**
 * Constants
 */

export const moduleName = 'profile';
const prefix = `${appName}/${moduleName}`;

// const GET_PROFILE_REQUEST = `${prefix}/GET_PROFILE_REQUEST`;
// const GET_PROFILE_SUCCESS = `${prefix}/GET_PROFILE_SUCCESS`;
// const GET_PROFILE_FAILURE = `${prefix}/GET_PROFILE_FAILURE`;

const UPDATE_PROFILE_REQUEST = `${prefix}/UPDATE_PROFILE_REQUEST`;
const UPDATE_PROFILE_SUCCESS = `${prefix}/UPDATE_PROFILE_SUCCESS`;
const UPDATE_PROFILE_FAILURE = `${prefix}/UPDATE_PROFILE_FAILURE`;

// export const initialState = {
//    userData: {},
//
//    loadingOfProfile: false,
//    errorOfProfile: null,
//
//    loadingOfUpdating: false,
//    errorOfUpdating: null,
// };

/**
 * Reducer
 */

export default (state = companyState, action) => {
   switch (action.type) {
      // case GET_PROFILE_REQUEST:
      //    return {
      //       ...state,
      //       loadingOfProfile: true,
      //       errorOfProfile: null
      //    };
      //
      // case GET_PROFILE_SUCCESS:
      //    return {
      //       ...state,
      //       userData: action.payload,
      //       loadingOfProfile: false,
      //       errorOfProfile: null
      //    };
      //
      // case GET_PROFILE_FAILURE:
      //    return {
      //       ...state,
      //       userData: {},
      //       loadingOfProfile: false,
      //       errorOfProfile: action.error
      //    };

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
//
// export const getProfile = () => {
//    const request = () => ({type: GET_PROFILE_REQUEST});
//    const success = data => ({type: GET_PROFILE_SUCCESS, payload: data});
//    const failure = error => ({type: GET_PROFILE_FAILURE, error});
//
//    return dispatch => {
//       dispatch(request());
//       Profile.get()
//          .then(res => dispatch(success(res.data)))
//          .catch(err => dispatch(failure(err.response.data)))
//    };
// };

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