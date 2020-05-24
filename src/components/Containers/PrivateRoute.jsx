import React from 'react';
import {Route, Redirect} from "react-router-dom";

import {urls} from "../../config/urls";

const PrivateRoute = ({component: Component, ...rest}) =>
   <Route {...rest} render={props =>
      localStorage.getItem('token')
         ? <Redirect to={{pathname: urls.home.path, state: {from: props.location}}}/>
         : <Component {...props}/>
   }/>;

export default PrivateRoute;