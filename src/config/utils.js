import {message} from "antd";

export const matchNumber = event => {
   const reg = /\D*/g;

   if (event.target.value.search(reg) !== -1) {
      event.target.value = event.target.value.replace(reg, '');
   }
};

export const sliceExtraText = (str, divider) =>
   str && str.length > divider
      ? `${str.slice(0, divider)}...`
      : str;

export const authMessage = () => message.warning('Для этой функций вам нужно авторизоваться!');

export const checkAuth = localStorage.getItem('token');

export const addToCart = (item, handler) => {
   const cart = localStorage.getItem('cart');

   let products = [];

   if (cart) {
      products = JSON.parse(cart)
   }

   products.push(item);

   handler(products);
   localStorage.setItem('cart', JSON.stringify(products));
};

export const deleteFromCart = (item, handler) => {
   const cart = localStorage.getItem('cart');

   let products = [];

   if (cart) {
      products = JSON.parse(cart)
   }

   handler(products.filter(product => product.id !== item.id));
   localStorage.setItem('cart', JSON.stringify(products.filter(product => product.id !== item.id)));
};