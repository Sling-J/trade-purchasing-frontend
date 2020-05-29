import React, {useEffect, useState} from 'react';
import {Switch, Route} from "react-router-dom";

import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Personal from "./Personal/Personal";
import Profile from "./Personal/Profile/Profile";
import Cart from "./Personal/Cart/Cart";
import CompanyCreating from "./Personal/CompanyCreating/CompanyCreating";
import Wishes from "./Personal/Wishes/Wishes";
import CompanyProducts from "./CompanyProducts/CompanyProducts";
import CategoryDetail from "./CategoryDetail/CategoryDetail";
import ProductDetail from "./ProductDetail/ProductDetail";
import CompanyList from "./Personal/CompanyList/CompanyList";
import CompanyUpdateName from "./CompanyUpdate/CompanyUpdateName";
import CompanyUpdateCategories from "./CompanyUpdate/CompanyUpdateCategories";
import CompanyUpdateProducts from "./CompanyUpdate/CompanyUpdateProducts";
import Orders from "./Personal/Orders/Orders";

import Header from "./Header/Header";

import {urls} from "../config/urls";
import PublicRoute from "./Containers/PublicRoute";
import history from "../config/history";
import Products from "./Products/Products";

const Root = () => {
   const [cart, setCart] = useState([]);
   const [hiddenRootClass, setHiddenRootClass] = useState('');

   useEffect(() => {
      setCart(JSON.parse(localStorage.getItem('cart')));
      setHiddenRootClass('');

      if (
         history.location.pathname === urls.signIn.path ||
         history.location.pathname === urls.signUp.path
      ) {
         setHiddenRootClass('hidden-root');
      }

      history.listen(location => {
         setHiddenRootClass('');

         if (
            location.pathname === urls.signIn.path ||
            location.pathname === urls.signUp.path
         ) {
            setHiddenRootClass('hidden-root');
         }
      })
   }, []);

   return (
      <div className={hiddenRootClass}>
         <Route path={urls.user.path} component={Auth}/>
         <Header count={cart && cart.length}/>

         <div className="wrapper">
            <div className="wrapper-color">
               <Switch>
                  <PublicRoute exact path={urls.home.path} component={Home}/>
                  <PublicRoute exact path={urls.companyProducts.path} component={CompanyProducts} cart={cart}
                               setCart={setCart}/>

                  <PublicRoute restricted exact path={urls.companyUpdateName.path} component={CompanyUpdateName}/>
                  <PublicRoute restricted exact path={urls.companyUpdateCategory.path}
                               component={CompanyUpdateCategories}/>
                  <PublicRoute restricted exact path={urls.companyUpdateProducts.path}
                               component={CompanyUpdateProducts}/>

                  <PublicRoute exact path={urls.categoryDetail.path} component={CategoryDetail} cart={cart}
                               setCart={setCart}/>
                  <PublicRoute exact path={urls.productDetail.path} component={ProductDetail} cart={cart}
                               setCart={setCart}/>
                  <PublicRoute exact path={urls.products.path} component={Products} cart={cart}
                               setCart={setCart}/>

                  <PublicRoute restricted exact path={urls.companyCreating.path} component={CompanyCreating}/>
                  <PublicRoute restricted exact path={urls.companyList.path} component={CompanyList}/>
                  <PublicRoute restricted exact path={urls.personal.path} component={Personal}/>
                  <PublicRoute restricted path={urls.profile.path} component={Profile}/>
                  <PublicRoute restricted path={urls.wishes.path} component={Wishes}/>
                  <PublicRoute restricted path={urls.cart.path} component={Cart} cart={cart} setCart={setCart}/>
                  <PublicRoute restricted path={urls.orders.path} component={Orders}/>
               </Switch>
            </div>
         </div>
      </div>
   )
};

export default Root;