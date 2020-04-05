import React from 'react';

import {Link} from "react-router-dom";

import {Input, Avatar, Badge} from "antd";
import {
   UserOutlined, ShoppingCartOutlined,
   HeartOutlined, HistoryOutlined
} from "@ant-design/icons";

import {urls} from "../../config/urls";

const {Search} = Input;

const Header = () => {
   return (
      <nav className="navigation flex j-sb fa-center">
         <div className="navigation-main">
            <div className="flex fa-center">
               <Link to={urls.home.path} className="navigation-main__logo">
                  TRADE
               </Link>

               <div className="navigation-main__search">
                  <Search placeholder="Поиск товаров" onSearch={value => console.log(value)} enterButton/>
               </div>
            </div>

            <ul className="navigation-main__menu flex">
               <li className="navigation-main-menu__item">
                  <Link className="navigation-main-menu-item__link" to={urls.home.path}>
                     Главная
                  </Link>
               </li>
               <li className="navigation-main-menu__item">
                  <Link className="navigation-main-menu-item__link" to={urls.wishes.path}>
                     Список желаний
                  </Link>
               </li>
               <li className="navigation-main-menu__item">
                  <a className="navigation-main-menu-item__link" href="#">Регистрация компании</a>
               </li>
            </ul>
         </div>

         <div className="navigation-user">
            <div className="navigation-user-info">
               <Link to={urls.personal.path} className="navigation-user-info__link">
                  <span className="navigation-user-info-link__desc">Личный кабинет</span> <Avatar size="large" icon={<UserOutlined/>}/>
               </Link>
            </div>

            <div className="navigation-user-desc flex j-sb fa-center">
               <Link className="navigation-user-desc__link" to={urls.wishes.path}>
                  <Badge count={1}>
                     <HeartOutlined className="navigation-user-desc-link__icon"/>
                  </Badge>

                  <p className="navigation-user-desc-link__title">Желания</p>
               </Link>

               <Link className="navigation-user-desc__link" to={urls.orders.path}>
                  <HistoryOutlined className="navigation-user-desc-link__icon"/>

                  <p className="navigation-user-desc">История</p>
               </Link>

               <Link className="navigation-user-desc__link" to={urls.cart.path}>
                  <Badge count={2}>
                     <ShoppingCartOutlined className="navigation-user-desc-link__icon"/>
                  </Badge>

                  <p className="navigation-user-desc">Корзина</p>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Header;