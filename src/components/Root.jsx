import React, {Fragment} from 'react';

import {Switch, Route} from "react-router-dom";

import {urls} from "../config/urls";

import Auth from "./Auth/Auth";
import Personal from "./Personal/Personal";
import Profile from "./Personal/Profile/Profile";
import Orders from "./Personal/Orders/Orders";

import Header from "./Header/Header";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const Root = () => (
   <Fragment>
      <Route path={urls.user.path} component={Auth}/>
      <Header/>

      <div className="wrapper">
         <Breadcrumbs/>

         <Switch>
            <Route exact path={urls.personal.path} component={Personal}/>
            <Route path={urls.profile.path} component={Profile}/>
            <Route path={urls.orders.path} component={Orders}/>
         </Switch>
      </div>
   </Fragment>
);

export default Root;