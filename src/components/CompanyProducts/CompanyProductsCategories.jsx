import React from 'react';

import {Button} from "antd";

const CompanyProductsCategories = () => {
   return (
      <div className="products-container-main__categories">
         <Button
            className="products-container-main-categories__title"
            type="primary"
            size="large"
            block
         >
            Каталог товаров
         </Button>

         <div className="products-container-main-categories__box">
            <p className="company-products-container-main-box-categories__item">
               Смартфоны и гаджеты
            </p>
            <p className="company-products-container-main-box-categories__item">
               Комплектующие
            </p>
            <p className="company-products-container-main-box-categories__item">
               Компьютерная периферия
            </p>
            <p className="company-products-container-main-box-categories__item">
               Оргтехника и расходные материалы
            </p>
            <p className="company-products-container-main-box-categories__item">
               Сетевое и серверное оборудование
            </p>
            <p className="company-products-container-main-box-categories__item">
               Товары для геймеров
            </p>
            <p className="company-products-container-main-box-categories__item">
               Развлечения и отдых
            </p>
         </div>
      </div>
   );
};

export default CompanyProductsCategories;