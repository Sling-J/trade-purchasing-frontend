import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {Input, Form, Button} from "antd";
import {UserOutlined, KeyOutlined} from '@ant-design/icons';
import {moduleName as authModule, signIn} from "../../ducks/Auth";

const SignIn = ({loadingOfLogin, errorOfLogin, signIn}) => {
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(() => {
      if (errorOfLogin) {
         setErrorMessage('Неверные данные, попробуйте снова!');
      }
   }, [errorOfLogin]);

   const onFinish = values => {
      localStorage.setItem('cart', '[]');
      signIn(values)
   };
   const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

   return (
      <Form
         name="sign-in"
         initialValues={{remember: true}}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
      >
         <Form.Item
            name="username"
            rules={[{required: true, message: 'Пожалуйста введите ваше имя пользователя!'}]}
         >
            <Input size="large" placeholder="Имя пользователя" prefix={<UserOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="password"
            rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}
         >
            <Input.Password size="large" placeholder="Пароль" prefix={<KeyOutlined/>}/>
         </Form.Item>

         <p style={{color: '#FF4D4F', textAlign: 'center'}}>{errorMessage}</p>

         <Form.Item>
            <Button
               className="auth-container-route__form-item"
               type="primary"
               htmlType="submit"
               block
               loading={loadingOfLogin}
            >
               Войти
            </Button>
         </Form.Item>
      </Form>
   );
};

const mapStateToProps = state => ({
   loadingOfLogin: state[authModule].loadingOfLogin,
   errorOfLogin: state[authModule].errorOfLogin
});

const mapDispatchToProps = {
   signIn
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SignIn);