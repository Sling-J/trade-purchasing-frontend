import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'

import {Input, Button, Spin, Modal, Empty, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {
   companyUpdate,
   getCompanyDetail,
   createCategory,
   moduleName as companyModule,
   updateCategory
} from "../../ducks/Company";

const CompanyUpdateCategories = props => {
   const {
      getCompanyDetail, createCategory, updateCategory,
      companyDetail, categoryCreatedStatus, loadingOfUpdating,
      loadingOfCategories, loadingOfCompanyDetail, match
   } = props;

   const [visible, setVisible] = useState(false);
   const [categoryModal, setCategoryModal] = useState({
      open: false,
      categoryId: null,
   });

   const [categoryModalName, setCategoryModalName] = useState('');
   const [categoryName, setCategoryName] = useState('');

   useEffect(() => {
      if (categoryCreatedStatus) {
         setCategoryName('');
      }
   }, [categoryCreatedStatus]);

   useEffect(() => {
      getCompanyDetail(match.params.id);
   }, [getCompanyDetail, match.params.id]);

   const showModal = () => setVisible(true);
   const handleCancel = () => setVisible(false);
   const handleOk = () => createCategory({
      company_id: parseInt(match.params.id),
      name: categoryName
   });

   const categoryModalCancel = () => setCategoryModal({
      open: false,
      categoryId: null,
      categoryName: ''
   });

   const categoryModalHandle = () => updateCategory(categoryModal.categoryId, {
      name: categoryModalName
   });

   return (
      <div className="update-categories-container">
         <Spin spinning={loadingOfUpdating || loadingOfCompanyDetail}>
            <Modal
               title="Создание категории"
               okText="Создать"
               visible={visible}
               onOk={handleOk}
               onCancel={handleCancel}
               confirmLoading={loadingOfCategories}
            >
               <Input
                  value={categoryName}
                  onChange={e => setCategoryName(e.target.value)}
                  placeholder="Название категории"
               />
            </Modal>

            <Modal
               title="Редактирование категории"
               okText="Сохранить"
               visible={categoryModal.open}
               onOk={categoryModalHandle}
               onCancel={categoryModalCancel}
               confirmLoading={loadingOfCategories}
            >
               <Input
                  value={categoryModalName}
                  onChange={e => setCategoryModalName(e.target.value)}
                  placeholder="Название категории"
               />
            </Modal>

            <h1 className="main-title">Редактирование категориев для {companyDetail.name}</h1>

            <div className="update-categories-container__list">
               {companyDetail.categories && companyDetail.categories.length !== 0 ? companyDetail.categories.map((category, idx) => (
                  <div key={idx} className="update-categories-container-list__item flex fa-center">
                     <Input value={category.name}/>

                     <Tooltip title="Редактировать">
                        <EditOutlined onClick={() => {
                           setCategoryModal({
                              open: true,
                              categoryId: category.id,
                           });
                           setCategoryModalName(category.name)
                        }}/>
                     </Tooltip>

                     <Tooltip title="Удалить">
                        <DeleteOutlined/>
                     </Tooltip>
                  </div>
               )) : (
                  <Empty style={{width: 120}} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
               )}
            </div>

            <div className="update-categories-container__create">
               <Button
                  type="primary"
                  onClick={showModal}
               >
                  Создать категроию
               </Button>
            </div>
         </Spin>
      </div>
   );
};

const mapStateToProps = state => ({
   companyDetail: state[companyModule].companyDetail,
   loadingOfUpdating: state[companyModule].loadingOfUpdating,
   loadingOfCategories: state[companyModule].loadingOfCategories,
   categoryCreatedStatus: state[companyModule].categoryCreatedStatus,
   loadingOfCompanyDetail: state[companyModule].loadingOfCompanyDetail,
});

const mapDispatchToProps = dispatch => ({
   getCompanyDetail: id => dispatch(getCompanyDetail(id)),
   companyUpdate: (id, data) => dispatch(companyUpdate(id, data)),
   updateCategory: (id, data) => dispatch(updateCategory(id, data)),
   createCategory: (data) => dispatch(createCategory(data)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyUpdateCategories);