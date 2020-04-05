import React from 'react';

import {Form, DatePicker, Button, Input, Switch} from "antd";

import PersonalArea from "../../Containers/PersonalArea";

const layout = {
   labelCol: {span: 5},
   wrapperCol: {span: 22},
};

const Profile = () => {
   const onFinish = values => {
      console.log('Success:', values);
   };

   const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
   };

   return (
      <PersonalArea title="Профиль пользователя">
         <div className="profile-container">
            <Form
               {...layout}
               name="basic"
               initialValues={{remember: true}}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
            >
               <Form.Item
                  label="Имя"
                  name="name"
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Фамилия"
                  name="surname"
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Отчество"
                  name="middle-name"
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Имя пользователя"
                  name="username"
                  rules={[{required: true, message: 'Пожалуйста введите имя пользователя!'}]}
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Почта"
                  name="email"
                  rules={[{required: true, message: 'Пожалуйста введите почту!'}]}
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Телефон"
                  name="phone"
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Дата рождения"
                  name="date"
               >
                  <DatePicker
                     style={{width: '100%'}}
                     renderExtraFooter={null}
                     onChange={e => console.log(e)}
                  />
               </Form.Item>

               <Form.Item
                  label="Город"
                  name="city"
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  name="isBusiness"
                  label="Предприниматель"
                  valuePropName="checked"
               >
                  <Switch/>
               </Form.Item>

               <Form.Item>
                  <Button type="primary" htmlType="submit">
                     Сохранить
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </PersonalArea>
   );
};

export default Profile;