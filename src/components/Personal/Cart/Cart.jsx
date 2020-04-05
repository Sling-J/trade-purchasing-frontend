import React from 'react';

import PersonalArea from "../../Containers/PersonalArea";

import {InputNumber, Button, Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

import TestProduct from "../../../assets/img/test-product.jpg";

const Cart = () => {
   return (
      <PersonalArea title="Корзина">
         <div className="cart-container">
            <div className="cart-container__table">
               <div className="cart-container-table__item flex fa-center j-sb">
                  <div className="cart-container-table-item__info flex fa-center">
                     <Tooltip title="Удалить">
                        <div className="cart-container-table-item-info__action">
                           <DeleteOutlined/>
                        </div>
                     </Tooltip>

                     <div className="cart-container-table-item-info__img">
                        <img src={TestProduct} alt="Cart"/>
                     </div>

                     <div className="cart-container-table-item-info__product">
                        <p className="cart-container-table-item-info-product__title">
                           Смарт-часы Xiaomi Amazfit GTS A1914, Lava Grey
                        </p>

                        <p className="cart-container-table-item-info-product__id">
                           Артикул: 144220
                        </p>
                     </div>
                  </div>

                  <div className="cart-container-table-item__desc flex fa-center">
                     <div className="cart-container-table-item-desc__counter">
                        <InputNumber
                           min={1}
                           max={10}
                           size="large"
                           defaultValue={1}
                           onChange={e => console.log(e)}
                        />
                     </div>

                     <div className="cart-container-table-item-desc__price">
                        <p className="cart-container-table-item-desc-price__title">
                           68 500 ₸
                        </p>

                        <p className="cart-container-table-item-desc-price__sale">
                           0% скидка
                        </p>
                     </div>
                  </div>
               </div>

               <div className="cart-container-table__item flex fa-center j-sb">
                  <div className="cart-container-table-item__info flex fa-center">
                     <Tooltip title="Удалить">
                        <div className="cart-container-table-item-info__action">
                           <DeleteOutlined/>
                        </div>
                     </Tooltip>

                     <div className="cart-container-table-item-info__img">
                        <img src={TestProduct} alt="Cart"/>
                     </div>

                     <div className="cart-container-table-item-info__product">
                        <p className="cart-container-table-item-info-product__title">
                           Смарт-часы Xiaomi Amazfit GTS A1914, Lava Grey
                        </p>

                        <p className="cart-container-table-item-info-product__id">
                           Артикул: 144220
                        </p>
                     </div>
                  </div>

                  <div className="cart-container-table-item__desc flex fa-center">
                     <div className="cart-container-table-item-desc__counter">
                        <InputNumber
                           min={1}
                           max={10}
                           size="large"
                           defaultValue={1}
                           onChange={e => console.log(e)}
                        />
                     </div>

                     <div className="cart-container-table-item-desc__price">
                        <p className="cart-container-table-item-desc-price__title">
                           68 500 ₸
                        </p>

                        <p className="cart-container-table-item-desc-price__sale">
                           0% скидка
                        </p>
                     </div>
                  </div>
               </div>

               <div className="cart-container-table__item flex fa-center j-sb">
                  <div className="cart-container-table-item__info flex fa-center">
                     <Tooltip title="Удалить">
                        <div className="cart-container-table-item-info__action">
                           <DeleteOutlined/>
                        </div>
                     </Tooltip>

                     <div className="cart-container-table-item-info__img">
                        <img src={TestProduct} alt="Cart"/>
                     </div>

                     <div className="cart-container-table-item-info__product">
                        <p className="cart-container-table-item-info-product__title">
                           Смарт-часы Xiaomi Amazfit GTS A1914, Lava Grey
                        </p>

                        <p className="cart-container-table-item-info-product__id">
                           Артикул: 144220
                        </p>
                     </div>
                  </div>

                  <div className="cart-container-table-item__desc flex fa-center">
                     <div className="cart-container-table-item-desc__counter">
                        <InputNumber
                           min={1}
                           max={10}
                           size="large"
                           defaultValue={1}
                           onChange={e => console.log(e)}
                        />
                     </div>

                     <div className="cart-container-table-item-desc__price">
                        <p className="cart-container-table-item-desc-price__title">
                           68 500 ₸
                        </p>

                        <p className="cart-container-table-item-desc-price__sale">
                           0% скидка
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="cart-container__buy flex fa-center">
               <p className="cart-container-buy__price">
                  Общая стоимость: <span>219 000 ₸</span>
               </p>

               <Button type="primary" size="large">
                  Оформить заказ
               </Button>
            </div>
         </div>
      </PersonalArea>
   );
};

export default Cart;