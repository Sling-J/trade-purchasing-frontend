import React from 'react';

import {Card, Button} from "antd";
import {
   UserOutlined, ShoppingCartOutlined,
   AreaChartOutlined, FormOutlined,
   HddOutlined, HeartOutlined
} from '@ant-design/icons';

import CardBg from "../../assets/img/wt_blue.png";

const {Meta} = Card;

const Personal = () => {
   return (
      <div className="personal-container">
         <h1 className="personal-container__title">Персональный раздел</h1>

         <div className="personal-container__box flex j-sb">
            <div className="personal-container-box__list flex j-sb flex-wrap">
               <Card
                  className="personal-container-box-list__item"
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
                  <Meta title="РЕГИСТРАЦИЯ КОМПАНИЙ" description="Для выставление своих компаний"/>
               </Card>

               <Card
                  className="personal-container-box-list__item personal-container-box-list__item-cancel"
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

            <div className="personal-container-box__text flex j-sb fd-column">
               <ul className="personal-container-box__info">
                  <li className="personal-container-box-info__item">
                     <a href="#" className="personal-container-box-info-item__link">Личные данные</a>
                  </li>
                  <li className="personal-container-box-info__item">
                     <a href="#" className="personal-container-box-info-item__link">Корзина</a>
                  </li>
                  <li className="personal-container-box-info__item">
                     <a href="#" className="personal-container-box-info-item__link">История заказов</a>
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
         </div>
      </div>
   );
};

export default Personal;