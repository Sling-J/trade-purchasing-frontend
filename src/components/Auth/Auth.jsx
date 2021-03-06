import React from 'react';

import {NavLink} from "react-router-dom";

import {LoginOutlined, UserAddOutlined} from '@ant-design/icons';

import PrivateRoute from "../Containers/PrivateRoute";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import {urls} from "../../config/urls";

const Auth = () => {
   return (
      <div className="auth flex j-center fa-center">
         <div className="auth-container">
            <div className="auth-container__nav flex j-sb">
               <NavLink
                  className="auth-container-nav__link"
                  activeClassName="auth-container-nav__active"
                  to={urls.signIn.path}
               >
                  <LoginOutlined/> Войти
               </NavLink>
               <NavLink
                  className="auth-container-nav__link"
                  activeClassName="auth-container-nav__active"
                  to={urls.signUp.path}
               >
                  <UserAddOutlined/> Создать аккаунт
               </NavLink>
            </div>

            <div className="auth-container__route">
               <PrivateRoute path={urls.signIn.path} component={SignIn}/>
               <PrivateRoute path={urls.signUp.path} component={SignUp}/>
            </div>
         </div>
      </div>
   );
};

export default Auth;