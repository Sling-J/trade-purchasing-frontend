import React, {Fragment} from 'react';

import {Switch, Route} from "react-router-dom";

import {urls} from "../config/urls";

import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Personal from "./Personal/Personal";
import Profile from "./Personal/Profile/Profile";
import Cart from "./Personal/Cart/Cart";
import Wishes from "./Personal/Wishes/Wishes";
import Orders from "./Personal/Orders/Orders";

import Header from "./Header/Header";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import CompanyProducts from "./CompanyProducts/CompanyProducts";

const Root = () => (
   <Fragment>
      <Route path={urls.user.path} component={Auth}/>
      <Header/>

      <div className="wrapper">
         <div className="wrapper-breadcrumbs">
            <Breadcrumbs/>
         </div>

         <div className="wrapper-color">
            <Switch>
               <Route exact path={urls.home.path} component={Home}/>
               <Route exact path={urls.companyProducts.path} component={CompanyProducts}/>
               <Route exact path={urls.personal.path} component={Personal}/>
               <Route path={urls.profile.path} component={Profile}/>
               <Route path={urls.wishes.path} component={Wishes}/>
               <Route path={urls.cart.path} component={Cart}/>
               <Route path={urls.orders.path} component={Orders}/>
            </Switch>
         </div>
      </div>
   </Fragment>
);

export default Root;