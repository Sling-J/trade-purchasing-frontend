import React from 'react';

import {Input, Avatar, Badge} from "antd";
import {
   UserOutlined, ShoppingCartOutlined,
   HeartOutlined, HistoryOutlined
} from "@ant-design/icons";

const {Search} = Input;

const Header = () => {
   return (
      <nav className="navigation flex j-sb fa-center">
         <div className="navigation-main">
            <div className="flex fa-center">
               <p className="navigation-main__logo">
                  TRADE
               </p>

               <div className="navigation-main__search">
                  <Search placeholder="Поиск товаров" onSearch={value => console.log(value)}/>
               </div>
            </div>

            <ul className="navigation-main__menu flex">
               <li className="navigation-main-menu__item">
                  <a className="navigation-main-menu-item__link" href="#">История заказов</a>
               </li>
               <li className="navigation-main-menu__item">
                  <a className="navigation-main-menu-item__link" href="#">Товар компаний</a>
               </li>
               <li className="navigation-main-menu__item">
                  <a className="navigation-main-menu-item__link" href="#">Список желаний</a>
               </li>
            </ul>
         </div>

         <div className="navigation-user">
            <div className="navigation-user-info">
               <a className="navigation-user-info__link" href="#">
                  <span className="navigation-user-info-link__desc">Личный кабинет</span> <Avatar size="large" icon={<UserOutlined/>}/>
               </a>
            </div>

            <div className="navigation-user-desc flex j-sb fa-center">
               <a className="navigation-user-desc__link" href="#">
                  <Badge count={0}>
                     <HeartOutlined className="navigation-user-desc-link__icon"/>
                  </Badge>

                  <p className="navigation-user-desc-link__title">Желания</p>
               </a>

               <a className="navigation-user-desc__link" href="#">
                  <HistoryOutlined className="navigation-user-desc-link__icon"/>

                  <p className="navigation-user-desc">История</p>
               </a>

               <a className="navigation-user-desc__link" href="#">
                  <Badge count={2}>
                     <ShoppingCartOutlined className="navigation-user-desc-link__icon"/>
                  </Badge>

                  <p className="navigation-user-desc">Корзина</p>
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Header;