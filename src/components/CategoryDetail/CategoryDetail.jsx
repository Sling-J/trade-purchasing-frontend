import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {Button} from "antd";
import {CheckOutlined, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {addToCart, authMessage, checkAuth, deleteFromCart} from "../../config/utils";

import PageLoading from "../Containers/PageLoading";
import history from "../../config/history";

import {getCompanyDetail, moduleName as companyModule} from "../../ducks/Company";

import TestImg from "../../assets/img/test-product.jpg";
import {baseMedia} from "../../service";

const CategoryDetail = ({match, getCompanyDetail, cart, setCart, companyDetail, loadingOfCompanyDetail}) => {
   useEffect(() => {
      getCompanyDetail(match.params.id)
   }, [getCompanyDetail, match.params.id]);

   const category = companyDetail.categories ? companyDetail.categories.find(category => category.id === parseInt(match.params.categoryId)) : {};

   return (
      <PageLoading loading={loadingOfCompanyDetail}>
         <div className="category-container">
            <h1 className="main-title">
               Категория {category.name}
            </h1>

            <div className="category-container__products flex flex-wrap">
               {category.products && category.products.map((product, idx) => {
                  const productsIsExist = cart && cart.find(item => item.id === product.id);

                  return (
                     <div
                        className="category-container-products__item"
                        onClick={() => history.push(
                           `/company-products/${match.params.id}/category/${match.params.categoryId}/product/${product.id}`
                        )}
                        key={idx}
                     >
                        <div className="category-container-products-item__img">
                           <img src={baseMedia + product.avatar || TestImg} alt="New product"/>
                        </div>

                        <p className="category-container-products-item__price">
                           {product.price} ₸
                        </p>

                        <p className="category-container-products-item__name">
                           {product.name}
                        </p>

                        <div className="category-container-products-item__buy flex j-center">
                           <Button
                              onClick={e => {
                                 e.stopPropagation();

                                 if (checkAuth) {
                                    productsIsExist
                                       ? deleteFromCart(product, setCart)
                                       : addToCart(product, setCart)
                                 } else {
                                    authMessage()
                                 }
                              }}
                              type="primary"
                              icon={productsIsExist ? <CheckOutlined/> : <ShoppingCartOutlined/>}
                           >
                              {productsIsExist ? 'В корзине' : 'Купить'}
                           </Button>
                           <Button
                              onClick={e => {
                                 e.stopPropagation();
                                 if (checkAuth) {

                                 } else {
                                    authMessage()
                                 }
                              }}
                              icon={<HeartOutlined/>}
                           />
                        </div>
                     </div>
                  )
               })}
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
)(CategoryDetail);