import {appName} from "../config/config";

/**
 * Constants
 */

export const moduleName = 'auth';
const prefix = `${appName}/${moduleName}`;

const LOGIN_REQUEST = `${prefix}/LOGIN_REQUEST`;
const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`;
const LOGIN_FAILURE = `${prefix}/LOGIN_FAILURE`;

const REGISTRATION_REQUEST = `${prefix}/REGISTRATION_REQUEST`;
const REGISTRATION_SUCCESS = `${prefix}/REGISTRATION_SUCCESS`;
const REGISTRATION_FAILURE = `${prefix}/REGISTRATION_FAILURE`;

const initialState = {
   userData: {},
   loadingOfLogin: false,
   errorOfLogin: null,

   loadingOfRegistration: false,
   errorOfRegistration: null,
};

/**
 * Reducer
 */

export default (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_REQUEST:
         return {
            ...state,
            userData: {},
            loadingOfLogin: true,
            errorOfLogin: null
         };

      case LOGIN_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loadingOfLogin: false,
            errorOfLogin: null
         };

      case LOGIN_FAILURE:
         return {
            ...state,
            userData: {},
            loadingOfLogin: false,
            errorOfLogin: action.error
         };

      default:
         return initialState
   }
}