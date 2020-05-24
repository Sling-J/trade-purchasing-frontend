import React from 'react';
import {Link} from "react-router-dom";

import {Button} from "antd";

const CompanyProductsCategories = ({companyDetail}) => (
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
         {companyDetail.categories && companyDetail.categories.map((category, idx) => (
            <Link key={idx} to={`/company-products/${companyDetail.id}/category/${category.id}`} className="company-products-container-main-box-categories__item">
               {category.name}
            </Link>
         ))}
      </div>
   </div>
);

export default CompanyProductsCategories;