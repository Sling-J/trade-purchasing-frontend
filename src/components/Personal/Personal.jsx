import React from 'react';

import {Card, Tooltip} from "antd";
import {
   UserOutlined, ShoppingCartOutlined,
   AreaChartOutlined, FormOutlined,
   HddOutlined, HeartOutlined
} from '@ant-design/icons';

import PersonalArea from "../Containers/PersonalArea";

import CardBg from "../../assets/img/wt_blue.png";

import history from "../../config/history";
import {urls} from "../../config/urls";

const {Meta} = Card;

const Personal = () => {
   const changeUrl = url => history.push(url);

   return (
      <PersonalArea title="Персональный раздел">
         <div className="personal-container-box__list flex j-sb flex-wrap">
            <Card
               className="personal-container-box-list__item"
               onClick={() => changeUrl(urls.profile.path)}
               hoverable
               cover={
                  <div className="personal-container-box-list-item__overlay">
                     <div className="personal-container-box-list-item-overlay__img">
                        <img alt="Personal Area" src={CardBg}/>
                     </div>

                     <UserOutlined/>
                  </div>
               }
            >
               <Meta title="ЛИЧНЫЕ ДАННЫЕ" description="Измените личные данные"/>
            </Card>

            <Card
               className="personal-container-box-list__item"
               onClick={() => changeUrl(urls.cart.path)}
               hoverable
               cover={
                  <div className="personal-container-box-list-item__overlay">
                     <div className="personal-container-box-list-item-overlay__img">
                        <img alt="Personal Area" src={CardBg}/>
                     </div>

                     <ShoppingCartOutlined/>
                  </div>
               }
            >
               <Meta title="КОРЗИНА" description="Оплатите товары добавленные в корзину"/>
            </Card>

            <Card
               className="personal-container-box-list__item"
               onClick={() => changeUrl(urls.orders.path)}
               hoverable
               cover={
                  <div className="personal-container-box-list-item__overlay">
                     <div className="personal-container-box-list-item-overlay__img">
                        <img alt="Personal Area" src={CardBg}/>
                     </div>

                     <AreaChartOutlined/>
                  </div>
               }
            >
               <Meta title="ИСТОРИЯ ЗАКАЗОВ" description="Статус заказов"/>
            </Card>

            <Tooltip title="Регистрация компании">
               <Card
                  className="personal-container-box-list__item personal-container-box-list__item-cancel"
                  hoverable
                  cover={
                     <div className="personal-container-box-list-item__overlay">
                        <div className="personal-container-box-list-item-overlay__img">
                           <img alt="Personal Area" src={CardBg}/>
                        </div>

                        <FormOutlined/>
                     </div>
                  }
               >
                  <Meta title="РЕГИСТРАЦИЯ КОМПАНИИ" description="Для выставление своих компаний"/>
               </Card>
            </Tooltip>

            <Card
               className="personal-container-box-list__item personal-container-box-list__item-cancel"
               onClick={() => changeUrl(urls.wishes.path)}
               hoverable
               cover={
                  <div className="personal-container-box-list-item__overlay">
                     <div className="personal-container-box-list-item-overlay__img">
                        <img alt="Personal Area" src={CardBg}/>
                     </div>

                     <HeartOutlined/>
                  </div>
               }
            >
               <Meta title="СПИСОК ЖЕЛАНИЙ" description="Избранные товары"/>
            </Card>

            <Card
               className="personal-container-box-list__item personal-container-box-list__item-cancel"
               hoverable
               cover={
                  <div className="personal-container-box-list-item__overlay">
                     <div className="personal-container-box-list-item-overlay__img">
                        <img alt="Personal Area" src={CardBg}/>
                     </div>

                     <HddOutlined/>
                  </div>
               }
            >
               <Meta title="КОНТАКТЫ" description="Наши контакты"/>
            </Card>
         </div>
      </PersonalArea>
   );
};

export default Personal;