import React from 'react';

import CompanyProductsCategories from "./CompanyProductsCategories";
import CompanyProductsMain from "./CompanyProductsMain";
import CompanyProductsAuth from "./CompanyProductsAuth";

const CompanyProducts = () => {
   return (
      <div className="company-products-container">
         <h1 className="company-products-container__title main-title">
            Товары компании
         </h1>

         <div className="company-products-container__main flex j-sb ">
            <CompanyProductsCategories/>
            <CompanyProductsMain/>
            <CompanyProductsAuth/>
         </div>
      </div>
   );
};

export default CompanyProducts;