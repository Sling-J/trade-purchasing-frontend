import React from 'react';
import {Link} from "react-router-dom";

import {Button} from "antd";

import {urls} from "../../config/urls";

const PersonalSideBar = () => (
   <div className="personal-container-box__text">
      <ul className="personal-container-box__info">
         <li className="personal-container-box-info__item">
            <Link to={urls.profile.path} className="personal-container-box-info-item__link">
               Личные данные
            </Link>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Корзина</a>
         </li>
         <li className="personal-container-box-info__item">
            <Link to={urls.orders.path} className="personal-container-box-info-item__link">
               История заказов
            </Link>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Регистрация компаний</a>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Контакты</a>
         </li>
         <li className="personal-container-box-info__item">
            <a href="#" className="personal-container-box-info-item__link">Главная</a>
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