import React from 'react';

import {Switch, Route} from "react-router-dom";

import {urls} from "../config/urls";

import Auth from "./Auth/Auth";

const Root = () => (
   <Switch>
      <Route path={urls.user.path} component={Auth}/>
   </Switch>
);

export default Root;