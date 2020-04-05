import React from 'react';

// import {Button} from "antd";
import {ShoppingCartOutlined, RightOutlined, AreaChartOutlined, HeartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {urls} from "../../config/urls";

const CompanyProductsAuth = () => {
   return (
      <div className="products-container-main__auth">
         <p className="products-container-main-auth__title">
            Добро пожаловать в <br/>
            <span>TRADE</span>
         </p>

         <div className="products-container-main-auth__action">
            {/*<Button*/}
            {/*   className="products-container-main-auth-action__sign-in"*/}
            {/*   type="primary"*/}
            {/*   shape="round"*/}
            {/*   block*/}
            {/*>*/}
            {/*   Войти в личный кабинет*/}
            {/*</Button>*/}

            {/*<p className="products-container-main-auth-action__sign-up">Зарегистрироваться</p>*/}

            <p className="products-container-main-auth-action__greet">
               Приветствую, <br/> Нурел Азаматович!
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
         </div>
      </div>
   );
};

export default CompanyProductsAuth;