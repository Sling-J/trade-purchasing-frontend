import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import moment from "moment";

import {Button, DatePicker, Form, Input, Select, Spin} from "antd";

import {getCompanyDetail, companyUpdate, moduleName as companyModule} from "../../ducks/Company";

import {activities} from "../Personal/CompanyCreating/CompanyActivitiesList";
import {matchNumber} from "../../config/utils";

const {Option} = Select;

const layout = {
   labelCol: {span: 4},
   wrapperCol: {span: 22},
};

const CompanyUpdateName = ({companyDetail, getCompanyDetail, loadingOfUpdating, loadingOfCompanyDetail, companyUpdate, match}) => {
   const [fields, setFields] = useState([]);
   const [file, setFile] = useState(null);

   useEffect(() => {
      if (Object.keys(companyDetail).length !== 0) {
         const newArr = Object.keys(companyDetail).map(item => {
            let value;

            if (item === 'created_data') {
               if (companyDetail[item]) {
                  value = moment(companyDetail[item])
               } else {
                  value = ''
               }
            } else if (item === 'activity') {
               value =  JSON.parse(companyDetail[item]) ? JSON.parse(companyDetail[item]) : companyDetail[item]
            } else {
               value = companyDetail[item]
            }

            return {
               name: item,
               value: value,
            }
         });

         setFields(newArr);
      }
   }, [companyDetail]);

   useEffect(() => {
      getCompanyDetail(match.params.id);
   }, [getCompanyDetail, match.params.id]);

   const disabledDate = current => {
      return current && current > moment().endOf('day');
   };

   const onFinish = values => {
      if (file && typeof file !== 'string') {
         companyUpdate(match.params.id, {
            name: values.name,
            description: values.description,
            created_data: values.created_data ? values.created_data.format('YYYY-MM-DD') : null,
            BIN: values.BIN,
            activity: JSON.stringify(values.activity),
            country: values.country,
            city: values.city,
            photo: file
         })
      } else {
         companyUpdate(match.params.id, {
            name: values.name,
            description: values.description,
            created_data: values.created_data ? values.created_data.format('YYYY-MM-DD') : null,
            BIN: values.BIN,
            activity: JSON.stringify(values.activity),
            country: values.country,
            city: values.city,
         })
      }
   };

   const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
   };

   return (
      <div className="profile-container">
         <h1 className="main-title">
            Редактирование компании
         </h1>

         <Spin spinning={loadingOfUpdating || loadingOfCompanyDetail}>
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
               fields={fields}
            >
               <Form.Item
                  label="Название компании"
                  name="name"
                  rules={[{required: true, message: 'Пожалуйста введите название компании!'}]}
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Описание компании"
                  name="description"
                  rules={[{required: true, message: 'Пожалуйста введите описание компании!'}]}
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Дата создание компании"
                  name="created_data"
                  rules={[{required: true, message: 'Пожалуйста выберите дату создание компании!'}]}
               >
                  <DatePicker
                     disabledDate={disabledDate}
                     style={{width: '100%'}}
                     renderExtraFooter={null}
                     format="YYYY-MM-DD"
                  />
               </Form.Item>

               <Form.Item
                  label="БИН"
                  name="BIN"
                  rules={[{required: true, message: 'Пожалуйста введите БИН!'}]}
               >
                  <Input onInput={matchNumber}/>
               </Form.Item>

               <Form.Item
                  label="Деятельность"
                  name="activity"
                  rules={[{required: true, message: 'Пожалуйста введите деятельность компании!'}]}
               >
                  <Select
                     mode="tags"
                     style={{width: '100%'}}
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
               >
                  <Input/>
               </Form.Item>

               <Form.Item
                  label="Город"
                  name="city"
               >
                  <Input/>
               </Form.Item>

               <Form.Item>
                  <Button type="primary" htmlType="submit">
                     Сохранить изменения
                  </Button>
               </Form.Item>
            </Form>
         </Spin>
      </div>
   );
};

const mapStateToProps = state => ({
   companyDetail: state[companyModule].companyDetail,
   loadingOfUpdating: state[companyModule].loadingOfUpdating,
   loadingOfCompanyDetail: state[companyModule].loadingOfCompanyDetail,
});

const mapDispatchToProps = dispatch => ({
   getCompanyDetail: id => dispatch(getCompanyDetail(id)),
   companyUpdate: (id, data) => dispatch(companyUpdate(id, data)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyUpdateName);