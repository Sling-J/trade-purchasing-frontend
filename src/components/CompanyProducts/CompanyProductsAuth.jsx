import React from 'react';
import {Link} from "react-router-dom";

import {Button} from "antd";
import {
   ShoppingCartOutlined, RightOutlined,
   AreaChartOutlined, HeartOutlined
} from "@ant-design/icons";

import CheckAuth, {Authorized, Unauthorized} from "../Containers/CheckAuth";
import {urls} from "../../config/urls";

const CompanyProductsAuth = ({companyDetail, userData}) => {
   return (
      <div className="products-container-main__auth">
         <p className="products-container-main-auth__title">
            Добро пожаловать в <br/>
            <span>{companyDetail.name}</span>
         </p>

         <div className="products-container-main-auth__action">
            <CheckAuth>
               <Authorized>
                  <p className="products-container-main-auth-action__greet">
                     Приветствую! <br/> {userData.first_name} {userData.middle_name}
                  </p>

                  <div className="products-container-main-auth-action__list">
                     <Link className="products-container-main-auth-action-list__item flex fa-center j-sb" to={urls.cart.path}>
                        <div className="products-container-main-auth-action-list-item__mLogo">
                           <ShoppingCartOutlined/>
                        </div>
                        <p className="products-container-main-auth-action-list-item__pg">
                           Корзина
                        </p>
                        <div className="products-container-main-auth-action-list-item__sLogo">
                           <RightOutlined/>
                        </div>
                     </Link>

                     <Link className="products-container-main-auth-action-list__item flex fa-center j-sb" to={urls.wishes.path}>
                        <div className="products-container-main-auth-action-list-item__mLogo">
                           <HeartOutlined/>
                        </div>
                        <p className="products-container-main-auth-action-list-item__pg">
                           Список желаний
                        </p>
                        <div className="products-container-main-auth-action-list-item__sLogo">
                           <RightOutlined/>
                        </div>
                     </Link>

                     <Link className="products-container-main-auth-action-list__item flex fa-center j-sb" to={urls.orders.path}>
                        <div className="products-container-main-auth-action-list-item__mLogo">
                           <AreaChartOutlined/>
                        </div>
                        <p className="products-container-main-auth-action-list-item__pg">
                           История заказов
                        </p>
                        <div className="products-container-main-auth-action-list-item__sLogo">
                           <RightOutlined/>
                        </div>
                     </Link>
                  </div>
               </Authorized>

               <Unauthorized>
                  <Link to={urls.signIn.path}>
                     <Button
                        className="products-container-main-auth-action__sign-in"
                        type="primary"
                        shape="round"
                        block
                     >
                        Войти в личный кабинет
                     </Button>
                  </Link>

                  <Link className="products-container-main-auth-action__sign-up" to={urls.signUp.path}>
                     Зарегистрироваться
                  </Link>
               </Unauthorized>
            </CheckAuth>
         </div>
      </div>
   );
};

export default CompanyProductsAuth;