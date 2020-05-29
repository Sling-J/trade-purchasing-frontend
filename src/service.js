import axios from 'axios';
import {urls} from "./config/urls";

export const baseUrl = 'http://167.71.3.152:3321/api';
export const baseMedia = 'http://167.71.3.152:3321';

export const instance = axios.create({
   baseURL: baseUrl,
   headers: {
      'Content-Type': 'application/json'
   }
});

const configureAuth = config => {
   if (!config.headers.Authorization) {
      const newConfig = {
         headers: {},
         ...config
      };

      const token = localStorage.getItem('token');

      if (token && !(config.url === urls.signIn.path || config.url === urls.signUp.path)) {
         newConfig.headers.Authorization = `Token ${token}`;
      }

      return newConfig;
   }

   return config;
};

instance.interceptors.request.use(configureAuth, e => Promise.reject(e));

export const Auth = {
   signIn: data => instance.post('/users/token/', data),
   signUp: data => instance.post('/users/create/', data)
};

export const Profile = {
   get: () => instance.get('/users/profile/'),
   update: data => instance.put('/users/update/', data),
};

export const Company = {
   create: data => instance.post('/companies/create/', data),
   update: (id, data) => instance.put(`/companies/${id}/update/`, data),
   getCategories: id => instance.get(`/companies/${id}/categories/`),
   getOrders: id => instance.get(`/companies/${id}/orders/`),
   getDetail: id => instance.get(`/companies/${id}/`),
   getProducts: id => instance.get(`/companies/${id}/products`),
   get: () => instance.get(`/companies/`),
   getMyCompanies: () => instance.get(`/companies/my`),
};

export const Category = {
   create: data => instance.post('/categories/create/', data),
   update: (id, data) => instance.put(`/categories/${id}/update/`, data),
};

export const Products = {
   get: () => instance.get('/products/'),
   getDetail: id => instance.get(`/products/${id}/`),
   create: data => instance.post('/products/create/', data),
   update: (id, data) => instance.put(`/products/${id}/update/`, data),
};