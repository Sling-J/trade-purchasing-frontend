import React from 'react';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Carousel} from "antd";
import TestImg from "../../assets/img/test-company.jpg";

const CompanyProductsMain = () => {
   let carousel;

   return (
      <div className="products-container-main__news">
         <div
            onClick={() => carousel.prev()}
            className="products-container-main-news__left-stick flex j-center fa-center"
         >
            <LeftOutlined/>
         </div>

         <Carousel dotPosition="top" ref={node => (carousel = node)}>
            <div>
               <img src={TestImg} alt=""/>
            </div>
         </Carousel>

         <div
            onClick={() => carousel.next()}
            className="products-container-main-news__right-stick flex j-center fa-center"
         >
            <RightOutlined/>
         </div>
      </div>
   );
};

export default CompanyProductsMain;