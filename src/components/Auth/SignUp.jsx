import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {Button, Form, Input} from "antd";
import {UserOutlined, KeyOutlined, MailOutlined} from '@ant-design/icons';

import {moduleName as authModule, signUp} from "../../ducks/Auth";

const SignUp = ({loadingOfRegistration, errorOfRegistration, signUp}) => {
   const [errorMessage, setErrorMessage] = useState('');
   const [errorMessage2, setErrorMessage2] = useState('');

   useEffect(() => {
      if (errorOfRegistration) {
         if (errorOfRegistration.response.data.username) {
            setErrorMessage(errorOfRegistration.response.data.username[0]);
         }

         if (errorOfRegistration.response.data.email) {
            setErrorMessage2(`Email - ${errorOfRegistration.response.data.email[0]}`);
         }
      }
   }, [errorOfRegistration]);

   const onFinish = values => {
      if (values.password === values.sPassword) {
         if (values.password.length >= 8) {
            localStorage.setItem('cart', '[]');
            setErrorMessage('');
            signUp(values);
         } else {
            setErrorMessage('Пароль не менее 8 символов');
         }
      } else {
         setErrorMessage('Пароли не совпадают!');
      }
   };

   const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

   return (
      <Form
         name="sign-up"
         initialValues={{remember: true}}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
      >
         <Form.Item
            name="username"
            rules={[{required: true, message: 'Пожалуйста придумайте имя пользователя!'}]}
         >
            <Input size="large" placeholder="Имя пользователя" prefix={<UserOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="email"
            rules={[{required: true, type: 'email', message: 'Пожалуйста введите электронную почту!'}]}
         >
            <Input size="large" placeholder="Электронная почта" prefix={<MailOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="password"
            rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}
         >
            <Input.Password size="large" placeholder="Пароль" prefix={<KeyOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="sPassword"
            rules={[{required: true, message: 'Пожалуйста повторите введите пароль!'}]}
         >
            <Input.Password size="large" placeholder="Повторите пароль" prefix={<KeyOutlined/>}/>
         </Form.Item>

         <p style={{color: '#FF4D4F', textAlign: 'center'}}>{errorMessage}</p>
         <p style={{color: '#FF4D4F', textAlign: 'center'}}>{errorMessage2}</p>

         <Form.Item>
            <Button
               className="auth-container-route__form-item"
               type="primary"
               htmlType="submit"
               block
               loading={loadingOfRegistration}
            >
               Создать аккаунт
            </Button>
         </Form.Item>
      </Form>
   );
};

const mapStateToProps = state => ({
   loadingOfRegistration: state[authModule].loadingOfRegistration,
   errorOfRegistration: state[authModule].errorOfRegistration
});

const mapDispatchToProps = {
   signUp
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SignUp);