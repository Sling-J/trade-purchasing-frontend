import React from 'react';
import {NavLink} from "react-router-dom";

import {Button} from "antd";

import {urls} from "../../config/urls";

const PersonalSideBar = () => (
   <div className="personal-container-box__text">
      <ul className="personal-container-box__info">
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.personal.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
               exact
            >
               Личный кабинет
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.profile.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               Личные данные
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.cart.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               Корзина
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.orders.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               История заказов
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.wishes.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               Список желаний
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Регистрация компаний</a>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Контакты</a>
         </li>
      </ul>

      <Button
         className="personal-container-box__exit"
         type="primary"
         size="large"
         block
      >
         Выйти
      </Button>
   </div>
);

export default PersonalSideBar;