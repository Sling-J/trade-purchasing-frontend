import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {moduleName as profileModule, updateProfile} from "../../../ducks/Profile";
import {moduleName as companyModule, getProfile} from "../../../ducks/Company";

import {Form, DatePicker, Button, Input, Switch, Spin} from "antd";

import PersonalArea from "../../Containers/PersonalArea";

import {matchNumber} from "../../../config/utils";
import moment from "moment";

const layout = {
   labelCol: {span: 5},
   wrapperCol: {span: 22},
};

const Profile = ({getProfile, userData, loadingOfProfile, updateProfile, loadingOfUpdating}) => {
   const [fields, setFields] = useState([]);

   useEffect(() => {
      if (Object.keys(userData).length !== 0) {
         const newArr = Object.keys(userData).map(item => ({
            name: item,
            value: item === 'birthday' ? userData[item] ? moment(userData[item]) : '' : userData[item]
         }));

         setFields(newArr);
      }
   }, [userData]);

   useEffect(() => {
      getProfile();
   }, [getProfile]);

   const disabledDate = current => {
      return current && current > moment().endOf('day');
   };

   const onFinish = values => {
      updateProfile({
         username: values.username,
         email: values.email,
         first_name: values.first_name,
         last_name: values.last_name,
         middle_name: values.middle_name,
         phone: values.phone,
         birthday: values.birthday ? values.birthday.format('YYYY-MM-DD') : null,
         country: values.country,
         city: values.city,
         is_businessman: values.is_businessman,
      });
   };

   const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
   };

   return (
      <PersonalArea title="Профиль пользователя">
         <div className="profile-container">
            <Spin spinning={loadingOfProfile}>
               <Form
                  {...layout}
                  name="basic"
                  initialValues={{remember: true}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  fields={fields}
               >
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
                     rules={[{required: true, type: 'email', message: 'Пожалуйста введите почту!'}]}
                  >
                     <Input/>
                  </Form.Item>

                  <Form.Item
                     label="Имя"
                     name="first_name"
                     rules={[{required: true, message: 'Пожалуйста введите имя!'}]}
                  >
                     <Input placeholder="Данияр"/>
                  </Form.Item>

                  <Form.Item
                     label="Фамилия"
                     name="last_name"
                     rules={[{required: true, message: 'Пожалуйста введите фамилию!'}]}
                  >
                     <Input placeholder="Адильбаев"/>
                  </Form.Item>

                  <Form.Item
                     label="Отчество"
                     name="middle_name"
                  >
                     <Input placeholder="Отчество"/>
                  </Form.Item>

                  <Form.Item
                     label="Телефон"
                     name="phone"
                  >
                     <Input onInput={matchNumber} placeholder="87757255855"/>
                  </Form.Item>

                  <Form.Item
                     label="Дата рождения"
                     name="birthday"
                  >
                     <DatePicker
                        disabledDate={disabledDate}
                        style={{width: '100%'}}
                        renderExtraFooter={null}
                        format="YYYY-MM-DD"
                     />
                  </Form.Item>

                  <Form.Item
                     label="Город"
                     name="city"
                  >
                     <Input placeholder="Семей"/>
                  </Form.Item>

                  <Form.Item
                     label="Предприниматель"
                     valuePropName="checked"
                     name="is_businessman"
                  >
                     <Switch/>
                  </Form.Item>

                  <Form.Item>
                     <Button type="primary" htmlType="submit" loading={loadingOfUpdating}>
                        Сохранить
                     </Button>
                  </Form.Item>
               </Form>
            </Spin>
         </div>
      </PersonalArea>
   );
};

const mapStateToProps = state => ({
   userData: state[companyModule].userData,
   loadingOfProfile: state[companyModule].loadingOfProfile,
   errorOfProfile: state[companyModule].errorOfProfile,
   loadingOfUpdating: state[profileModule].loadingOfUpdating,
   errorOfUpdating: state[profileModule].errorOfUpdating
});

const mapDispatchToProps = {
   getProfile, updateProfile
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Profile);