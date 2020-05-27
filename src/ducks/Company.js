import {appName} from "../config/config";
import {Category, Company, Profile, Products} from "../service";

/**
 * Constants
 */

export const moduleName = 'company';
const prefix = `${appName}/${moduleName}`;

const GET_COMPANIES_REQUEST = `${prefix}/GET_COMPANIES_REQUEST`;
const GET_COMPANIES_SUCCESS = `${prefix}/GET_COMPANIES_SUCCESS`;
const GET_COMPANIES_FAILURE = `${prefix}/GET_COMPANIES_FAILURE`;

const GET_MY_COMPANIES_REQUEST = `${prefix}/GET_MY_COMPANIES_REQUEST`;
const GET_MY_COMPANIES_SUCCESS = `${prefix}/GET_MY_COMPANIES_SUCCESS`;
const GET_MY_COMPANIES_FAILURE = `${prefix}/GET_MY_COMPANIES_FAILURE`;

const GET_COMPANY_PRODUCTS_REQUEST = `${prefix}/GET_COMPANY_PRODUCTS_REQUEST`;
const GET_COMPANY_PRODUCTS_SUCCESS = `${prefix}/GET_COMPANY_PRODUCTS_SUCCESS`;
const GET_COMPANY_PRODUCTS_FAILURE = `${prefix}/GET_COMPANY_PRODUCTS_FAILURE`;

const GET_PROFILE_REQUEST = `${prefix}/GET_PROFILE_REQUEST`;
const GET_PROFILE_SUCCESS = `${prefix}/GET_PROFILE_SUCCESS`;
const GET_PROFILE_FAILURE = `${prefix}/GET_PROFILE_FAILURE`;

const GET_PRODUCTS_REQUEST = `${prefix}/GET_PRODUCTS_REQUEST`;
const GET_PRODUCTS_SUCCESS = `${prefix}/GET_PRODUCTS_SUCCESS`;
const GET_PRODUCTS_FAILURE = `${prefix}/GET_PRODUCTS_FAILURE`;


const GET_COMPANY_DETAIL_REQUEST = `${prefix}/GET_COMPANY_DETAIL_REQUEST`;
const GET_COMPANY_DETAIL_SUCCESS = `${prefix}/GET_COMPANY_DETAIL_SUCCESS`;
const GET_COMPANY_DETAIL_FAILURE = `${prefix}/GET_COMPANY_DETAIL_FAILURE`;

const CREATE_COMPANY_REQUEST = `${prefix}/CREATE_COMPANY_REQUEST`;
const CREATE_COMPANY_SUCCESS = `${prefix}/CREATE_COMPANY_SUCCESS`;
const CREATE_COMPANY_FAILURE = `${prefix}/CREATE_COMPANY_FAILURE`;

const UPDATE_COMPANY_REQUEST = `${prefix}/UPDATE_COMPANY_REQUEST`;
const UPDATE_COMPANY_SUCCESS = `${prefix}/UPDATE_COMPANY_SUCCESS`;
const UPDATE_COMPANY_FAILURE = `${prefix}/UPDATE_COMPANY_FAILURE`;

const CATEGORY_CREATE_REQUEST = `${prefix}/CATEGORY_CREATE_REQUEST`;
const CATEGORY_CREATE_SUCCESS = `${prefix}/CATEGORY_CREATE_SUCCESS`;
const CATEGORY_CREATE_FAILURE = `${prefix}/CATEGORY_CREATE_FAILURE`;

const CATEGORY_UPDATE_REQUEST = `${prefix}/CATEGORY_UPDATE_REQUEST`;
const CATEGORY_UPDATE_SUCCESS = `${prefix}/CATEGORY_UPDATE_SUCCESS`;
const CATEGORY_UPDATE_FAILURE = `${prefix}/CATEGORY_UPDATE_FAILURE`;

const PRODUCT_CREATE_REQUEST = `${prefix}/PRODUCT_CREATE_REQUEST`;
const PRODUCT_CREATE_SUCCESS = `${prefix}/PRODUCT_CREATE_SUCCESS`;
const PRODUCT_CREATE_FAILURE = `${prefix}/PRODUCT_CREATE_FAILURE`;

const PRODUCT_UPDATE_REQUEST = `${prefix}/PRODUCT_UPDATE_REQUEST`;
const PRODUCT_UPDATE_SUCCESS = `${prefix}/PRODUCT_UPDATE_SUCCESS`;
const PRODUCT_UPDATE_FAILURE = `${prefix}/PRODUCT_UPDATE_FAILURE`;

export const initialState = {
   createdCompany: {},
   loadingOfCreating: false,
   errorOfCreating: null,

   companies: [],
   loadingOfCompanies: false,
   errorOfCompanies: null,

   products: [],
   loadingOfProducts: false,
   errorOfProducts: null,

   companyProducts: [],
   loadingOfCompanyProducts: false,
   errorOfCompanyProducts: null,

   myCompanies: [],
   loadingOfMyCompanies: false,
   errorOfMyCompanies: null,

   companyDetail: {},
   loadingOfCompanyDetail: false,
   errorOfCompanyDetail: null,

   userData: {},

   categoryCreatedStatus: false,
   loadingOfCategories: false,
   errorOfCategories: null,

   loadingOfProductCreating: false,
   errorOfProductCreating: null,

   loadingOfProfile: false,
   errorOfProfile: null,

   loadingOfUpdating: false,
   errorOfUpdating: null,
};

/**
 * Reducer
 */

export default (state = initialState, action) => {
   switch (action.type) {
      case GET_PROFILE_REQUEST:
         return {
            ...state,
            loadingOfProfile: true,
            errorOfProfile: null
         };

      case GET_PROFILE_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loadingOfProfile: false,
            errorOfProfile: null
         };

      case GET_PROFILE_FAILURE:
         return {
            ...state,
            userData: {},
            loadingOfProfile: false,
            errorOfProfile: action.error
         };

      case GET_PRODUCTS_REQUEST:
         return {
            ...state,
            loadingOfProducts: true,
            errorOfProducts: null
         };

      case GET_PRODUCTS_SUCCESS:
         return {
            ...state,
            products: action.payload,
            loadingOfProducts: false,
            errorOfProducts: null
         };

      case GET_PRODUCTS_FAILURE:
         return {
            ...state,
            products: {},
            loadingOfProducts: false,
            errorOfProducts: action.error
         };

      case GET_MY_COMPANIES_REQUEST:
         return {
            ...state,
            loadingOfMyCompanies: true,
            errorOfMyCompanies: null
         };

      case GET_MY_COMPANIES_SUCCESS:
         return {
            ...state,
            myCompanies: action.payload,
            loadingOfMyCompanies: false,
            errorOfMyCompanies: null
         };

      case GET_MY_COMPANIES_FAILURE:
         return {
            ...state,
            myCompanies: [],
            loadingOfMyCompanies: false,
            errorOfMyCompanies: action.error
         };

      case GET_COMPANY_PRODUCTS_REQUEST:
         return {
            ...state,
            loadingOfCompanyProducts: true,
            errorOfCompanyProducts: null
         };

      case GET_COMPANY_PRODUCTS_SUCCESS:
         return {
            ...state,
            companyProducts: action.payload,
            loadingOfCompanyProducts: false,
            errorOfCompanyProducts: null
         };

      case GET_COMPANY_PRODUCTS_FAILURE:
         return {
            ...state,
            companyProducts: [],
            loadingOfCompanyProducts: false,
            errorOfCompanyProducts: action.error
         };

      case CREATE_COMPANY_REQUEST:
         return {
            ...state,
            loadingOfCreating: true,
            errorOfCreating: null
         };

      case CREATE_COMPANY_SUCCESS:
         return {
            ...state,
            createdCompany: action.payload,
            loadingOfCreating: false,
            errorOfCreating: null
         };

      case CREATE_COMPANY_FAILURE:
         return {
            ...state,
            createdCompany: null,
            loadingOfCreating: false,
            errorOfCreating: action.error
         };

      case UPDATE_COMPANY_REQUEST:
         return {
            ...state,
            loadingOfUpdating: true,
            errorOfUpdating: null
         };

      case UPDATE_COMPANY_SUCCESS:
         return {
            ...state,
            companyDetail: action.payload,
            loadingOfUpdating: false,
            errorOfUpdating: null
         };

      case UPDATE_COMPANY_FAILURE:
         return {
            ...state,
            companyDetail: null,
            loadingOfUpdating: false,
            errorOfUpdating: action.error
         };

      case GET_COMPANIES_REQUEST:
         return {
            ...state,
            loadingOfCompanies: true,
            errorOfCompanies: null
         };

      case GET_COMPANIES_SUCCESS:
         return {
            ...state,
            companies: action.payload,
            loadingOfCompanies: false,
            errorOfCompanies: null
         };

      case GET_COMPANIES_FAILURE:
         return {
            ...state,
            companies: [],
            loadingOfCompanies: false,
            errorOfCompanies: action.error
         };

      case GET_COMPANY_DETAIL_REQUEST:
         return {
            ...state,
            loadingOfCompanyDetail: true,
            errorOfCompanyDetail: null
         };

      case GET_COMPANY_DETAIL_SUCCESS:
         return {
            ...state,
            companyDetail: action.payload,
            loadingOfCompanyDetail: false,
            errorOfCompanyDetail: null
         };

      case GET_COMPANY_DETAIL_FAILURE:
         return {
            ...state,
            companyDetail: {},
            loadingOfCompanyDetail: false,
            errorOfCompanyDetail: action.error
         };

      case CATEGORY_UPDATE_REQUEST:
      case CATEGORY_CREATE_REQUEST:
         return {
            ...state,
            categoryCreatedStatus: false,
            loadingOfCategories: true,
            errorOfCategories: null
         };

      case CATEGORY_UPDATE_SUCCESS:
      case CATEGORY_CREATE_SUCCESS:
         return {
            ...state,
            companyDetail: action.payload,
            categoryCreatedStatus: true,
            loadingOfCategories: false,
            errorOfCategories: null
         };

      case CATEGORY_UPDATE_FAILURE:
      case CATEGORY_CREATE_FAILURE:
         return {
            ...state,
            companyDetail: {},
            categoryCreatedStatus: false,
            loadingOfCategories: false,
            errorOfCategories: action.error
         };

      case PRODUCT_UPDATE_REQUEST:
      case PRODUCT_CREATE_REQUEST:
         return {
            ...state,
            categoryCreatedStatus: false,
            loadingOfProductCreating: true,
            errorOfProductCreating: null
         };

      case PRODUCT_UPDATE_SUCCESS:
      case PRODUCT_CREATE_SUCCESS:
         return {
            ...state,
            companyDetail: action.payload,
            categoryCreatedStatus: true,
            loadingOfProductCreating: false,
            errorOfProductCreating: null
         };

      case PRODUCT_UPDATE_FAILURE:
      case PRODUCT_CREATE_FAILURE:
         return {
            ...state,
            companyDetail: {},
            categoryCreatedStatus: false,
            loadingOfProductCreating: false,
            errorOfProductCreating: action.error
         };

      default:
         return initialState
   }
}

/**
 * Actions
 */

export const setDisplayedProducts = products => ({
   type: GET_PRODUCTS_SUCCESS,
   payload: products
});

export const getProfile = () => {
   const request = () => ({type: GET_PROFILE_REQUEST});
   const success = data => ({type: GET_PROFILE_SUCCESS, payload: data});
   const failure = error => ({type: GET_PROFILE_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Profile.get()
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.response.data)))
   };
};

export const getCompanyProducts = id => {
   const request = () => ({type: GET_COMPANY_PRODUCTS_REQUEST});
   const success = data => ({type: GET_COMPANY_PRODUCTS_SUCCESS, payload: data});
   const failure = error => ({type: GET_COMPANY_PRODUCTS_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Company.getProducts(id)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.response.data)))
   };
};

export const createCompany = data => {
   const request = () => ({type: CREATE_COMPANY_REQUEST});
   const success = data => ({type: CREATE_COMPANY_SUCCESS, payload: data});
   const failure = error => ({type: CREATE_COMPANY_FAILURE, error});

   const formData = new FormData();

   Object.keys(data).forEach(item => {
      formData.append(item, data[item])
   });

   return dispatch => {
      dispatch(request());
      Company.create(formData)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const companyUpdate = (id, data) => {
   const request = () => ({type: UPDATE_COMPANY_REQUEST});
   const success = data => ({type: UPDATE_COMPANY_SUCCESS, payload: data});
   const failure = error => ({type: UPDATE_COMPANY_FAILURE, error});

   const formData = new FormData();

   Object.keys(data).forEach(item => {
      formData.append(item, data[item])
   });

   return dispatch => {
      dispatch(request());
      Company.update(id, formData)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const getCompanies = () => {
   const request = () => ({type: GET_COMPANIES_REQUEST});
   const success = data => ({type: GET_COMPANIES_SUCCESS, payload: data});
   const failure = error => ({type: GET_COMPANIES_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Company.get()
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const getProducts = () => {
   const request = () => ({type: GET_PRODUCTS_REQUEST});
   const success = data => ({type: GET_PRODUCTS_SUCCESS, payload: data});
   const failure = error => ({type: GET_PRODUCTS_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Products.get()
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const getMyCompanies = () => {
   const request = () => ({type: GET_MY_COMPANIES_REQUEST});
   const success = data => ({type: GET_MY_COMPANIES_SUCCESS, payload: data});
   const failure = error => ({type: GET_MY_COMPANIES_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Company.getMyCompanies()
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const createCategory = data => {
   const request = () => ({type: CATEGORY_CREATE_REQUEST});
   const success = data => ({type: CATEGORY_CREATE_SUCCESS, payload: data});
   const failure = error => ({type: CATEGORY_CREATE_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Category.create(data)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const createProduct = data => {
   const request = () => ({type: PRODUCT_CREATE_REQUEST});
   const success = data => ({type: PRODUCT_CREATE_SUCCESS, payload: data});
   const failure = error => ({type: PRODUCT_CREATE_FAILURE, error});

   const formData = new FormData();

   Object.keys(data).forEach(item => {
      formData.append(item, data[item])
   });

   return dispatch => {
      dispatch(request());
      Products.create(formData)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const updateProduct = (id, data) => {
   const request = () => ({type: PRODUCT_UPDATE_REQUEST});
   const success = data => ({type: PRODUCT_UPDATE_SUCCESS, payload: data});
   const failure = error => ({type: PRODUCT_UPDATE_FAILURE, error});

   const formData = new FormData();

   Object.keys(data).forEach(item => {
      formData.append(item, data[item])
   });

   return dispatch => {
      dispatch(request());
      Products.update(id, formData)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const updateCategory = (id, data) => {
   const request = () => ({type: CATEGORY_UPDATE_REQUEST});
   const success = data => ({type: CATEGORY_UPDATE_SUCCESS, payload: data});
   const failure = error => ({type: CATEGORY_UPDATE_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Category.update(id, data)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};

export const getCompanyDetail = id => {
   const request = () => ({type: GET_COMPANY_DETAIL_REQUEST});
   const success = data => ({type: GET_COMPANY_DETAIL_SUCCESS, payload: data});
   const failure = error => ({type: GET_COMPANY_DETAIL_FAILURE, error});

   return dispatch => {
      dispatch(request());
      Company.getDetail(id)
         .then(res => dispatch(success(res.data)))
         .catch(err => dispatch(failure(err.message)))
   };
};