import React, {Fragment} from 'react';

import {Switch, Route} from "react-router-dom";

import {urls} from "../config/urls";

import Auth from "./Auth/Auth";
import Personal from "./Personal/Personal";

import Header from "./Header/Header";

const Root = () => (
   <Fragment>
      <Route path={urls.user.path} component={Auth}/>
      <Header/>

      <div className="wrapper">
         <Switch>
            <Route path={urls.personal.path} component={Personal}/>
         </Switch>
      </div>
   </Fragment>
);

export default Root;