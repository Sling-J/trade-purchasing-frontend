import React from 'react';

import {Input, Form, Button} from "antd";
import {UserOutlined, KeyOutlined} from '@ant-design/icons';

const SignIn = () => {
   const onFinish = values => console.log('Success:', values);
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

         <Form.Item>
            <Button className="auth-container-route__form-item" type="primary" htmlType="submit" block>
               Войти
            </Button>
         </Form.Item>
      </Form>
   );
};

export default SignIn;