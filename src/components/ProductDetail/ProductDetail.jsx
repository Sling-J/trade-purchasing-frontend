import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Button} from "antd";
import {HeartOutlined, ShoppingCartOutlined, CheckOutlined} from "@ant-design/icons";
import {addToCart, authMessage, deleteFromCart, checkAuth} from "../../config/utils";

import PageLoading from "../Containers/PageLoading";
import {getCompanyDetail, moduleName as companyModule} from "../../ducks/Company";
import {baseMedia} from "../../service";

const ProductDetail = ({match, getCompanyDetail, cart, setCart, companyDetail, loadingOfCompanyDetail}) => {
   useEffect(() => {
      getCompanyDetail(match.params.id)
   }, [getCompanyDetail, match.params.id]);

   const category = companyDetail.categories ? companyDetail.categories.find(category => category.id === parseInt(match.params.categoryId)) : {};
   const product = category.products ? category.products.find(product => product.id === parseInt(match.params.productId)) : {};

   const productsIsExist = cart && cart.find(item => item.id === product.id);

   return (
      <PageLoading loading={loadingOfCompanyDetail}>
         <div className="product-container">
            <h1 className="main-title">{match.params.product}</h1>

            <div className="product-container__info flex">
               <div className="product-container-info__img">
                  <img src={baseMedia + product.avatar} alt="Продукт"/>
               </div>

               <div className="product-container-info__desc">
                  <p className="product-container-info-desc__price">
                     {product.price} ₸
                  </p>

                  <p className="product-container-info-desc__count">
                     <CheckOutlined/> Количество предметов: <span className="product-container-info-desc-count__result">{product.count}</span>
                  </p>

                  <p className="product-container-info-desc__count">
                     <CheckOutlined/> Категория: <span className="product-container-info-desc-count__result">{category.name}</span>
                  </p>

                  <p className="product-container-info-desc__company">
                     <CheckOutlined/> Название компании: <span className="product-container-info-desc-count__result">{companyDetail.name}</span>
                  </p>
               </div>

               <Button
                  onClick={() => {
                     if (checkAuth) {
                        productsIsExist
                           ? deleteFromCart(product, setCart)
                           : addToCart(product, setCart)
                     } else {
                        authMessage()
                     }
                  }}
                  className="product-container-info__buy"
                  icon={productsIsExist ? <CheckOutlined/> : <ShoppingCartOutlined/>}
                  type="primary"
               >
                  {productsIsExist ? 'В корзине' : 'Купить'}
               </Button>

               <Button
                  onClick={e => {
                     e.stopPropagation();
                     authMessage();
                  }}
                  icon={<HeartOutlined/>}
               />
            </div>

            <div className="product-container__desc">
               <h1 className="product-container-desc__title main-title">
                  Описание <span>{product.name}</span>
               </h1>

               <p className="product-container-desc__text">
                  {product.description}
               </p>
            </div>
         </div>
      </PageLoading>
   );
};

const mapStateToProps = state => ({
   companyDetail: state[companyModule].companyDetail,
   loadingOfCompanyDetail: state[companyModule].loadingOfCompanyDetail,
});

const mapDispatchToProps = dispatch => ({
   getCompanyDetail: id => dispatch(getCompanyDetail(id)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductDetail);