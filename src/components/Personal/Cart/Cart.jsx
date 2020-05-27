import React from 'react';

import PersonalArea from "../../Containers/PersonalArea";

import {InputNumber, Button, Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

import TestProduct from "../../../assets/img/test-product.jpg";
import {deleteFromCart, matchNumber} from "../../../config/utils";

const Cart = ({cart, setCart}) => {
   const price = cart.length !== 0
      ? cart.length === 1
         ? cart[0].count * cart[0].price
         : cart.reduce((prev, current) => (prev.price * prev.count) + (current.price * current.count))
      : 0;

   return (
      <PersonalArea title="Корзина">
         <div className="cart-container">
            <div className="cart-container__table">
               {cart.map((item, idx) => (
                  <div className="cart-container-table__item flex fa-center j-sb" key={idx}>
                     <div className="cart-container-table-item__info flex fa-center">
                        <Tooltip title="Удалить">
                           <div
                              className="cart-container-table-item-info__action"
                              onClick={() => deleteFromCart(item, setCart)}
                           >
                              <DeleteOutlined/>
                           </div>
                        </Tooltip>

                        <div className="cart-container-table-item-info__img">
                           <img src={TestProduct} alt="Cart"/>
                        </div>

                        <div className="cart-container-table-item-info__product">
                           <p className="cart-container-table-item-info-product__title">
                              {item.name}
                           </p>

                           <p className="cart-container-table-item-info-product__id">
                              Артикул: {item.id}
                           </p>
                        </div>
                     </div>

                     <div className="cart-container-table-item__desc flex fa-center">
                        <div className="cart-container-table-item-desc__counter">
                           <InputNumber
                              min={1}
                              size="large"
                              onInput={matchNumber}
                              defaultValue={item.count}
                              onChange={value => {
                                 const arr = [...cart];

                                 arr[idx].count = value;
                                 setCart(arr);
                              }}
                           />
                        </div>

                        <div className="cart-container-table-item-desc__price">
                           <p className="cart-container-table-item-desc-price__title">
                              {item.count * item.price} ₸
                           </p>

                           <p className="cart-container-table-item-desc-price__sale">
                              0% скидка
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="cart-container__buy flex fa-center">
               <p className="cart-container-buy__price">
                  Общая стоимость: <span>{price} ₸</span>
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