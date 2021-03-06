import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {Link} from "react-router-dom";

import {Input, Avatar, Badge} from "antd";
import {
   UserOutlined, ShoppingCartOutlined,
   HeartOutlined, HistoryOutlined
} from "@ant-design/icons";

import CheckAuth, {Authorized, Unauthorized} from "../Containers/CheckAuth";
import {
   getProducts, setDisplayedProducts, getCompanies,
   moduleName as companyModule
} from "../../ducks/Company";

import {urls} from "../../config/urls";
import {authMessage} from "../../config/utils";
import history from "../../config/history";

const {Search} = Input;

const Header = ({count, getProducts, products, getCompanies, setDisplayedProducts}) => {
   useEffect(() => {
      getCompanies();
      getProducts();
   }, [getCompanies, getProducts]);

   const dynamicSearch = value => {
      const searchQuery = value.toLowerCase();

      const displayedProducts = products.filter(el =>
         el.name.toLowerCase().indexOf(searchQuery) !== -1
      );

      setDisplayedProducts(displayedProducts);
   };

   return (
      <nav className="navigation flex j-sb fa-center">
         <div className="navigation-main">
            <div className="flex fa-center">
               <Link to={urls.home.path} className="navigation-main__logo">
                  TRADE
               </Link>

               <div className="navigation-main__search">
                  <Search
                     placeholder="Поиск товаров"
                     enterButton
                     onSearch={value => {
                        history.push(urls.products.path);
                        value.length !== 0 && products.length !== 0
                           ? dynamicSearch(value)
                           : getProducts()
                     }}
                  />
               </div>
            </div>

            <ul className="navigation-main__menu flex">
               <li className="navigation-main-menu__item">
                  <Link className="navigation-main-menu-item__link" to={urls.home.path}>
                     Главная
                  </Link>
               </li>
               <li className="navigation-main-menu__item">
                  <CheckAuth>
                     <Authorized>
                        <Link className="navigation-main-menu-item__link" to={urls.wishes.path}>
                           Список желаний
                        </Link>
                     </Authorized>

                     <Unauthorized>
                        <p className="navigation-main-menu-item__link" onClick={authMessage}>
                           Список желаний
                        </p>
                     </Unauthorized>
                  </CheckAuth>
               </li>
               <li className="navigation-main-menu__item">
                  <CheckAuth>
                     <Authorized>
                        <Link className="navigation-main-menu-item__link" to={urls.companyCreating.path}>
                           Регистрация компании
                        </Link>
                     </Authorized>

                     <Unauthorized>
                        <p className="navigation-main-menu-item__link" onClick={authMessage}>
                           Регистрация компании
                        </p>
                     </Unauthorized>
                  </CheckAuth>
               </li>
            </ul>
         </div>

         <div className="navigation-user">
            <CheckAuth>
               <Authorized>
                  <div className="navigation-user-info">
                     <Link to={urls.personal.path} className="navigation-user-info__link">
                        <span className="navigation-user-info-link__desc">Личный кабинет</span> <Avatar size="large" icon={<UserOutlined/>}/>
                     </Link>
                  </div>

                  <div className="navigation-user-desc flex j-sb fa-center">
                     <Link className="navigation-user-desc__link" to={urls.wishes.path}>
                        <Badge>
                           <HeartOutlined className="navigation-user-desc-link__icon"/>
                        </Badge>

                        <p className="navigation-user-desc-link__title">
                           Желания
                        </p>
                     </Link>

                     <Link className="navigation-user-desc__link" to={urls.orders.path}>
                        <HistoryOutlined className="navigation-user-desc-link__icon"/>

                        <p className="navigation-user-desc">
                           История
                        </p>
                     </Link>

                     <Link className="navigation-user-desc__link" to={urls.cart.path}>
                        <Badge count={count}>
                           <ShoppingCartOutlined className="navigation-user-desc-link__icon"/>
                        </Badge>

                        <p className="navigation-user-desc">
                           Корзина
                        </p>
                     </Link>
                  </div>
               </Authorized>

               <Unauthorized>
                  <Link to={urls.signIn.path} className="navigation-user-info__auth">
                     Вход
                  </Link>

                  <Link to={urls.signUp.path} className="navigation-user-info__auth">
                     Регистрация
                  </Link>
               </Unauthorized>
            </CheckAuth>
         </div>
      </nav>
   )
};

const mapStateToProps = state => ({
   products: state[companyModule].products
});

const mapDispatchToProps = {
   getProducts,
   getCompanies,
   setDisplayedProducts
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Header);