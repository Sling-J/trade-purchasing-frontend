import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import {Button} from "antd";

import {urls} from "../../config/urls";
import {logout} from "../../ducks/Auth";

const PersonalSideBar = ({logout}) => (
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
            <NavLink
               to={urls.companyCreating.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               Регистрация компаний
            </NavLink>
         </li>
         <li className="personal-container-box-info__item">
            <NavLink
               to={urls.companyList.path}
               className="personal-container-box-info-item__link"
               activeClassName="personal-container-box-info-item__link-active"
            >
               Мои компании
            </NavLink>
         </li>
      </ul>

      <Button
         className="personal-container-box__exit"
         onClick={logout}
         type="primary"
         size="large"
         block
      >
         Выйти
      </Button>
   </div>
);

export default connect(null, {
   logout
})(PersonalSideBar);