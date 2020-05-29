import React from 'react';

import {Button} from "antd";
import {CheckOutlined, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {addToCart, authMessage, checkAuth, deleteFromCart} from "../../config/utils";

import TestImg from "../../assets/img/test-product.jpg";
import history from "../../config/history";
import {baseMedia} from "../../service";

const CompanyProductsList = ({companyProducts, companyDetail, setCart, cart}) => {
   console.log(companyDetail);
   return (
      <div className="company-products-container__list">
         <div className="company-products-container-list__item">
            <h1 className="company-products-container-list-item__title main-title">
               Продукты компании
            </h1>

            <div className="company-products-container-list-item__products flex flex-wrap">
               {companyProducts && companyProducts.map((item, idx) => {
                  const currentCategory = companyDetail.categories && companyDetail.categories.find(category => category.products.find(product => product.id === item.id));
                  const productsIsExist = cart && cart.find(data => data.id === item.id);

                  return (
                     <div
                        onClick={() => history.push(
                           `/company-products/${item.company_id}/category/${item.category_id}/product/${item.id}`
                        )}
                        className="company-products-container-list-item-products__item"
                        key={idx}
                     >
                        <div className="company-products-container-list-item-products-item__img">
                           <img src={baseMedia + item.avatar || TestImg} alt="New product"/>
                        </div>

                        <p className="company-products-container-list-item-products-item__price">
                           {item.price} ₸
                        </p>

                        <p className="company-products-container-list-item-products-item__name">
                           {item.name}
                        </p>

                        <p className="company-products-container-list-item-products-item__category">
                           Категория - {currentCategory && currentCategory.name}
                        </p>

                        <div className="company-products-container-list-item-products-item__buy flex j-center">
                           <Button
                              onClick={e => {
                                 e.stopPropagation();

                                 if (checkAuth) {
                                    productsIsExist
                                       ? deleteFromCart(item, setCart)
                                       : addToCart(item, setCart)
                                 } else {
                                    authMessage()
                                 }
                              }}
                              type="primary"
                              icon={productsIsExist ? <CheckOutlined/> : <ShoppingCartOutlined/>}
                           >
                              Купить
                           </Button>
                           <Button icon={<HeartOutlined/>}/>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   )
};

export default CompanyProductsList;