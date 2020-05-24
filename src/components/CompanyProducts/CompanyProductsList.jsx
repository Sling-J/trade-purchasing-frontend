import React from 'react';

import {Button} from "antd";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {authMessage} from "../../config/utils";

import TestImg from "../../assets/img/test-product.jpg";
import TestImg2 from "../../assets/img/test-company.jpg";
import history from "../../config/history";

const CompanyProductsList = () => {
   return (
      <div className="company-products-container__list">
         <div className="company-products-container-list__item">
            <h1 className="company-products-container-list-item__title main-title">
               Новинки
            </h1>

            <div className="company-products-container-list-item__products flex flex-wrap">
               <div
                  onClick={() => history.push("/company-products/phone/samsung")}
                  className="company-products-container-list-item-products__item"
               >
                  <div className="company-products-container-list-item-products-item__img">
                     <img src={TestImg} alt="New product"/>
                  </div>

                  <p className="company-products-container-list-item-products-item__price">
                     235 800 ₸
                  </p>

                  <p className="company-products-container-list-item-products-item__name">
                     Смарт-часы Xiaomi Amazfit GTS A1914, Lava Grey
                  </p>

                  <div className="company-products-container-list-item-products-item__buy flex j-center">
                     <Button
                        onClick={e => {
                           e.stopPropagation();
                           authMessage();
                        }}
                        type="primary"
                        icon={<ShoppingCartOutlined/>}
                     >
                        Купить
                     </Button>
                     <Button icon={<HeartOutlined/>}/>
                  </div>
               </div>
            </div>
         </div>

         <div className="company-products-container-list__item">
            <h1 className="company-products-container-list-item__title main-title">
               Топ товары
            </h1>

            <div className="company-products-container-list-item__products flex flex-wrap">
               <div
                  onClick={() => history.push("/company-products/phone/samsung")}
                  className="company-products-container-list-item-products__item"
               >
                  <div className="company-products-container-list-item-products-item__img">
                     <img src={TestImg2} alt="New product"/>
                  </div>

                  <p className="company-products-container-list-item-products-item__price">
                     235 800 ₸
                  </p>

                  <p className="company-products-container-list-item-products-item__name">
                     Смарт-часы Xiaomi Amazfit GTS A1914, Lava Grey
                  </p>

                  <div className="company-products-container-list-item-products-item__buy flex j-center">
                     <Button
                        onClick={e => {
                           e.stopPropagation();
                           authMessage();
                        }}
                        type="primary"
                        icon={<ShoppingCartOutlined/>}
                     >
                        Купить
                     </Button>
                     <Button icon={<HeartOutlined/>}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CompanyProductsList;