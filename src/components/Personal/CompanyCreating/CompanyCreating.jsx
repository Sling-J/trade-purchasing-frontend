import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {moduleName as companyModule, getProfile, createCompany} from "../../../ducks/Company";

import {matchNumber} from "../../../config/utils";
import {Button, DatePicker, Form, Select, Input, Spin} from "antd";
import moment from "moment";

import PersonalArea from "../../Containers/PersonalArea";
import {urls} from "../../../config/urls";
import {activities} from "./CompanyActivitiesList";

const {Option} = Select;
const {TextArea} = Input;

const layout = {
   labelCol: {span: 5},
   wrapperCol: {span: 22},
};

const CompanyCreating = ({getProfile, userData, loadingOfProfile, createCompany, loadingOfCreating}) => {
   const [file, setFile] = useState(null);

   useEffect(() => {
      if (Object.keys(userData).length === 0) {
         getProfile();
      }
   }, [getProfile, userData]);

   const disabledDate = current => {
      return current && current > moment().endOf('day');
   };

   const onFinish = values => {
      createCompany({
         name: values.name,
         description: values.description,
         created_data: values.created_data ? values.created_data.format('YYYY-MM-DD') : null,
         BIN: values.BIN,
         activity: JSON.stringify(values.activity),
         country: values.country,
         city: values.city,
         photo: file,
      })
   };

   const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
   };

   return (
      <PersonalArea title="Регистрация компании">
         <Spin spinning={loadingOfProfile || loadingOfCreating}>
            {userData.is_businessman ? (
               <div className="profile-container">
                  <div className="profile-container-upload">
                     <Input
                        type="file"
                        accept="image/*"
                        defaultValue={file}
                        onChange={e => setFile(e.target.files[0])}
                     />
                  </div>

                  <Form
                     {...layout}
                     name="basic"
                     initialValues={{remember: true}}
                     onFinish={onFinish}
                     onFinishFailed={onFinishFailed}
                  >
                     <Form.Item
                        label="Название компании"
                        name="name"
                        rules={[{required: true, message: 'Пожалуйста введите название компании!'}]}
                     >
                        <Input placeholder="Название компании"/>
                     </Form.Item>

                     <Form.Item
                        label="Описание компании"
                        name="description"
                        rules={[{required: true, message: 'Пожалуйста введите описание компании!'}]}
                     >
                        <TextArea rows={4} placeholder="Введите описание вашей компании"/>
                     </Form.Item>

                     <Form.Item
                        label="Дата создание компании"
                        name="created_data"
                        rules={[{required: true, message: 'Пожалуйста выберите дату создание компании!'}]}
                     >
                        <DatePicker
                           style={{width: '100%'}}
                           disabledDate={disabledDate}
                           renderExtraFooter={null}
                           format="YYYY-MM-DD"
                        />
                     </Form.Item>

                     <Form.Item
                        label="БИН"
                        name="BIN"
                        rules={[{required: true, message: 'Пожалуйста введите БИН!'}]}
                     >
                        <Input onInput={matchNumber} placeholder="БИН"/>
                     </Form.Item>

                     <Form.Item
                        label="Деятельность"
                        name="activity"
                        rules={[{required: true, message: 'Пожалуйста введите деятельность компании!'}]}
                     >
                        <Select
                           mode="tags"
                           style={{ width: '100%' }}
                           placeholder="Разработка ПО; Автоматизация бизнеса;"
                        >
                           {activities.map(activity => (
                              <Option key={activity.key}>{activity.name}</Option>
                           ))}
                        </Select>
                     </Form.Item>

                     <Form.Item
                        label="Страна"
                        name="country"
                        rules={[{required: true, message: 'Пожалуйста введите вашу страну!'}]}
                     >
                        <Input placeholder="Казахстан"/>
                     </Form.Item>

                     <Form.Item
                        label="Город"
                        name="city"
                        rules={[{required: true, message: 'Пожалуйста введите ваш город!'}]}
                     >
                        <Input placeholder="Алматы"/>
                     </Form.Item>

                     <Form.Item>
                        <Button type="primary" htmlType="submit">
                           Создать страницу компании
                        </Button>
                     </Form.Item>
                  </Form>
               </div>
            ) : (
               <div>
                  <h2 style={{fontWeight: '400'}}>
                     Поставьте галочку предпринимателя в <Link to={urls.profile.path}>личных данных</Link> для созданий страницы компании
                  </h2>
               </div>
            )}
         </Spin>
      </PersonalArea>
   );
};

const mapStateToProps = state => ({
   userData: state[companyModule].userData,
   loadingOfProfile: state[companyModule].loadingOfProfile,
   createdCompany: state[companyModule].createdCompany,
   loadingOfCreating: state[companyModule].loadingOfCreating,
});

const mapDispatchToProps = {
   getProfile, createCompany
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyCreating);