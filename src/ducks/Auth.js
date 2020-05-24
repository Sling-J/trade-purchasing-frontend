import {appName} from "../config/config";
import {Auth} from "../service";
import {urls} from "../config/urls";
import history from "../config/history";

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
            errorOfLogin: null,
         };

      case LOGIN_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loadingOfLogin: false,
            errorOfLogin: null,
            isAuth: true,
         };

      case LOGIN_FAILURE:
         return {
            ...state,
            userData: {},
            loadingOfLogin: false,
            errorOfLogin: action.error,
            isAuth: false,
         };

      case REGISTRATION_REQUEST:
         return {
            ...state,
            loadingOfRegistration: true,
            errorOfRegistration: null,
         };

      case REGISTRATION_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loadingOfRegistration: false,
            errorOfRegistration: null,
            isAuth: true,
         };

      case REGISTRATION_FAILURE:
         return {
            ...state,
            userData: {},
            loadingOfRegistration: false,
            errorOfRegistration: action.error,
            isAuth: false,
         };

      default:
         return initialState
   }
}

/**
 * Actions
 */

export const signIn = data => {
   const request = () => ({type: LOGIN_REQUEST});
   const success = data => ({type: LOGIN_SUCCESS, payload: data});
   const failure = error => ({type: LOGIN_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Auth.signIn(data)
         .then(res => {
            localStorage.setItem('token', res.data.token);

            dispatch(success(res.data.data));
            history.push(urls.home.path);
         })
         .catch(err => dispatch(failure(err)))
   };
};

export const signUp = data => {
   const request = () => ({type: REGISTRATION_REQUEST});
   const success = data => ({type: REGISTRATION_SUCCESS, payload: data});
   const failure = error => ({type: REGISTRATION_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Auth.signUp(data)
         .then(res => {
            localStorage.setItem('token', res.data.token);

            dispatch(success(res.data.data));
            history.push(urls.home.path);
         })
         .catch(err => dispatch(failure(err)))
   };
};



export const logout = () => {
   localStorage.removeItem('token');
   history.push(urls.signIn.path);
};