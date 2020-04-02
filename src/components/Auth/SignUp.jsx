import React from 'react';

import {Button, Form, Input} from "antd";
import {UserOutlined, KeyOutlined, MailOutlined} from '@ant-design/icons';

const SignUp = () => {
   const onFinish = values => console.log('Success:', values);
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
            rules={[{required: true, message: 'Пожалуйста введите электронную почту!'}]}
         >
            <Input size="large" placeholder="Электронная почта" prefix={<MailOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="password-1"
            rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}
         >
            <Input.Password size="large" placeholder="Пароль" prefix={<KeyOutlined/>}/>
         </Form.Item>

         <Form.Item
            name="password-2"
            rules={[{required: true, message: 'Пожалуйста повторите введите пароль!'}]}
         >
            <Input.Password size="large" placeholder="Повторите пароль" prefix={<KeyOutlined/>}/>
         </Form.Item>

         <Form.Item>
            <Button className="auth-container-route__form-item" type="primary" htmlType="submit" block>
               Создать аккаунт
            </Button>
         </Form.Item>
      </Form>
   );
};

export default SignUp;