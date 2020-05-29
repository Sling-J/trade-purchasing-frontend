import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import PageLoading from "../Containers/PageLoading";
import {CheckOutlined, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Button, Empty} from "antd";

import {getCompanies, moduleName as companyModule} from "../../ducks/Company";
import {addToCart, authMessage, checkAuth, deleteFromCart} from "../../config/utils";

import TestImg from "../../assets/img/test-product.jpg";
import history from "../../config/history";

const Products = ({getCompanies, products, companies, loadingOfProducts, cart, setCart}) => {
   useEffect(() => {
      getCompanies();
   }, [getCompanies]);

   return (
      <PageLoading loading={loadingOfProducts}>
         <div className='category-container'>
            <div className='category-container__products flex flex-wrap'>
               {products.length !== 0 ? products.map((product, idx) => {
                  const productsIsExist = cart && cart.find(item => item.id === product.id);
                  const currentCompany = companies.find(company =>
                     company.categories ? company.categories.find(category =>
                        category.products ? category.products.find(item => item.id === product.id) : {}
                     ) : {}
                  );

                  const currentCategory = currentCompany.categories && currentCompany.categories.find(category =>
                     category.products && category.products.find(item => item.id === product.id)
                  );

                  return (
                     <div className="category-container-products__item" key={idx} onClick={() => history.push(
                        `/company-products/${product.company_id}/category/${product.category_id}/product/${product.id}`
                     )}>
                        <div className="category-container-products-item__img">
                           <img src={product.avatar || TestImg} alt="New product"/>
                        </div>

                        <p className="category-container-products-item__price">
                           {product.price} ₸
                        </p>

                        <p className="category-container-products-item__name search-products">
                           {product.name}
                        </p>

                        <p className="category-container-products-item__company">
                           Категория - {currentCategory && currentCategory.name}
                        </p>

                        <p className="category-container-products-item__company search-category">
                           Компания - {currentCompany && currentCompany.name}
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
                              icon={productsIsExist
                                 ? <CheckOutlined/>
                                 : <ShoppingCartOutlined/>
                              }
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
               }) : (
                  <Empty
                     style={{width: '100%'}}
                     image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
               )}
            </div>
         </div>
      </PageLoading>
   );
};

const mapStateToProps = state => ({
   products: state[companyModule].products,
   companies: state[companyModule].companies,
   loadingOfProducts: state[companyModule].loadingOfProducts
});

const mapDispatchToProps = {
   getCompanies
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Products);