import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import PageLoading from "../Containers/PageLoading";
import {Input, InputNumber, Button, Select, Modal, Empty} from "antd";

import {getCompanyDetail, createProduct, updateProduct, moduleName as companyModule} from "../../ducks/Company";

import {matchNumber} from "../../config/utils";
import Img from '../../assets/img/test-product.jpg'

const CompanyUpdateProducts = ({match, getCompanyDetail, loadingOfCompanyDetail, companyDetail, updateProduct, loadingOfProductCreating, categoryCreatedStatus, createProduct}) => {
   const [visible, setVisible] = useState({
      open: false,
      isCreate: false
   });

   const [file, setFile] = useState(null);
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState('');
   const [categoryId, setCategoryId] = useState(undefined);
   const [count, setCount] = useState(null);

   const [productId, setProductId] = useState(null);

   useEffect(() => {
      if (categoryCreatedStatus) {
         setFile(null);
         setName('');
         setDescription('');
         setPrice('');
         setCategoryId(undefined);
         setCount(null);
      }
   }, [categoryCreatedStatus]);

   useEffect(() => {
      getCompanyDetail(match.params.id)
   }, [getCompanyDetail, match.params.id]);

   const showModal = status => setVisible({
      open: true,
      isCreate: status
   });
   const handleOk = () => {
      if (file && typeof file !== 'string') {
         createProduct({
            company_id: match.params.id,
            category_id: categoryId,
            name: name,
            description: description,
            count: count,
            price: parseInt(price),
            avatar: file
         })
      } else {
         createProduct({
            company_id: match.params.id,
            category_id: categoryId,
            name: name,
            description: description,
            count: count,
            price: parseInt(price),
         })
      }
   };
   const handleCancel = () => setVisible({
      open: false,
      isCreate: false
   });

   const handleEdit = () => {
      if (file && typeof file !== 'string') {
         updateProduct(productId, {
            company_id: match.params.id,
            category_id: categoryId,
            name: name,
            description: description,
            count: count,
            price: parseInt(price),
            avatar: file
         })
      } else {
         updateProduct(productId, {
            company_id: match.params.id,
            category_id: categoryId,
            name: name,
            description: description,
            count: count,
            price: parseInt(price),
         })
      }
   };

   return (
      <div className="update-products-container">
         <Modal
            title="Редактирование продукта"
            okText="Сохранить"
            visible={visible.open}
            confirmLoading={loadingOfProductCreating}
            onOk={visible.isCreate ? handleOk : handleEdit}
            onCancel={handleCancel}
         >
            <div className="update-products-container-modal">
               <div className="update-products-container-modal__field">
                  <p>Изображение продукта</p>
                  <Input
                     type="file"
                     accept="image/*"
                     defaultValue={file}
                     onChange={e => setFile(e.target.files[0])}
                  />
               </div>

               <div className="update-products-container-modal__field">
                  <p>Название продукта</p>
                  <Input
                     value={name}
                     onChange={e => setName(e.target.value)}
                     placeholder="Введите название продукта"
                  />
               </div>

               <div className="update-products-container-modal__field">
                  <p>Цена продукта</p>
                  <Input
                     value={price}
                     onChange={e => setPrice(e.target.value)}
                     onInput={matchNumber}
                     placeholder="Введите цену продукта"
                  />
               </div>

               <div className="update-products-container-modal__field">
                  <p>Категория продукта</p>

                  <Select
                     style={{width: '100%'}}
                     placeholder="Категории"
                     onChange={value => setCategoryId(value)}
                     value={categoryId}
                  >
                     {companyDetail.categories && companyDetail.categories.map((item, idx) => (
                        <Select.Option key={idx} value={item.id}>
                           {item.name}
                        </Select.Option>
                     ))}
                  </Select>
               </div>

               <div className="update-products-container-modal__field">
                  <p>Описание продукта</p>
                  <Input.TextArea
                     rows={4}
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                     placeholder="Введите описание продукта"
                  />
               </div>

               <div className="update-products-container-modal__field">
                  <p>Количество продукта</p>
                  <InputNumber
                     min={0}
                     onChange={value => setCount(value)}
                     value={count}
                  />
               </div>
            </div>
         </Modal>

         <PageLoading loading={loadingOfCompanyDetail}>
            <h1 className="main-title">Редактирование продуктов для {companyDetail.name}</h1>

            <Button className="update-products-container__create" onClick={() => showModal(true)}>
               Создать продукт
            </Button>

            {companyDetail.categories && companyDetail.categories.map((category, idx) => (
               <div className="update-products-category-list" key={idx}>
                  <h1 className="main-title">{category.name}</h1>

                  <div className="update-products-container__list">
                     {category.products.length !== 0 ? category.products.map((product, idx) => (
                        <div className="update-products-container-list__item" onClick={() => {
                           showModal(false);
                           setProductId(product.id);

                           setName(product.name);
                           setDescription(product.description);
                           setPrice(product.price);
                           setCategoryId(category.id);
                           setCount(product.count);
                        }}>
                           <div className="update-products-container-list-item__img">
                              <img src={Img} alt="Wish list"/>
                           </div>

                           <p className="update-products-container-list-item__title">
                              {product.name}
                           </p>

                           <p className="update-products-container-list-item__price">
                              {product.price} ₸
                           </p>

                           <p className="update-products-container-list-item__count">
                              Кол-во: <span>{product.count}</span>
                           </p>

                           <p className="update-products-container-list-item__count">
                              Категория: <span>{category.name}</span>
                           </p>

                           <p className="update-products-container-list-item__count">
                              Компания: <span>{companyDetail.name}</span>
                           </p>
                        </div>
                     )) : (
                        <Empty style={{width: '100%'}} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                     )}
                  </div>
               </div>
            ))}
         </PageLoading>
      </div>
   );
};

const mapStateToProps = state => ({
   companyDetail: state[companyModule].companyDetail,
   categoryCreatedStatus: state[companyModule].categoryCreatedStatus,
   loadingOfProductCreating: state[companyModule].loadingOfProductCreating,
   loadingOfCompanyDetail: state[companyModule].loadingOfCompanyDetail,
});

const mapDispatchToProps = dispatch => ({
   getCompanyDetail: id => dispatch(getCompanyDetail(id)),
   createProduct: data => dispatch(createProduct(data)),
   updateProduct: (id, data) => dispatch(updateProduct(id, data)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyUpdateProducts);