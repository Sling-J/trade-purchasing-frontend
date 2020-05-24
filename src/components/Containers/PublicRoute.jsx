import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {urls} from "../../config/urls";

const PublicRoute = ({component: Component, cart, setCart, restricted, ...rest}) =>
   <Route {...rest} render={props =>
      !localStorage.getItem('token') && restricted
         ? <Redirect to={{pathname: urls.signIn.path, state: {from: props.location}}}/>
         : <Component {...props} cart={cart} setCart={setCart}/>
   }/>;

export default PublicRoute;