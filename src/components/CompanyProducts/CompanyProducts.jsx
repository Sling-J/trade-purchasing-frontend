import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import CompanyProductsCategories from "./CompanyProductsCategories";
import CompanyProductsMain from "./CompanyProductsMain";
import CompanyProductsAuth from "./CompanyProductsAuth";
// import CompanyProductsList from "./CompanyProductsList";
import PageLoading from "../Containers/PageLoading";

import {getCompanyDetail, getProfile, moduleName as companyModule} from "../../ducks/Company";

import {Button} from "antd";

const CompanyProducts = ({getCompanyDetail, getProfile, userData, loadingOfProfile, companyDetail, loadingOfCompanyDetail, match}) => {


   useEffect(() => {
      getCompanyDetail(match.params.id);
      getProfile();
   }, [getCompanyDetail, getProfile, match.params.id]);

   return (
      <PageLoading loading={loadingOfCompanyDetail || loadingOfProfile}>
         <div className="company-products-container">
            <h1 className="company-products-container__title main-title">
               Компания {companyDetail.name}
            </h1>

            {Object.keys(userData).length !== 0 && userData.id === companyDetail.owner && (
               <div className="products-container-main-categories__crm flex j-sb">
                  <Link to={`/company-products/${match.params.id}/update-company`}>
                     <Button type="primary">
                        Редактирование компании
                     </Button>
                  </Link>

                  <Link to={`/company-products/${match.params.id}/update-category`}>
                     <Button type="primary">
                        Редактирование категориев
                     </Button>
                  </Link>

                  <Link to={`/company-products/${match.params.id}/update-products`}>
                     <Button type="primary">
                        Редактирование продуктов
                     </Button>
                  </Link>
               </div>
            )}

            <div className="company-products-container__main flex j-sb">
               <CompanyProductsCategories
                  companyDetail={companyDetail}
               />
               <CompanyProductsMain/>
               <CompanyProductsAuth
                  companyDetail={companyDetail}
                  userData={userData}
               />
            </div>

            {/*<CompanyProductsList/>*/}
         </div>
      </PageLoading>
   );
};

const mapStateToProps = state => ({
   companyDetail: state[companyModule].companyDetail,
   loadingOfCompanyDetail: state[companyModule].loadingOfCompanyDetail,
   userData: state[companyModule].userData,
   loadingOfProfile: state[companyModule].loadingOfProfile,
});

const mapDispatchToProps = dispatch => ({
   getCompanyDetail: id => dispatch(getCompanyDetail(id)),
   getProfile: () => dispatch(getProfile()),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyProducts);