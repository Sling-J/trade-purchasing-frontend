import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {Button} from "antd";

import PersonalArea from "../../Containers/PersonalArea";
import PageLoading from "../../Containers/PageLoading";
import {urls} from "../../../config/urls";

import {getMyCompanies, moduleName as companyModule} from "../../../ducks/Company";

import TestImg from "../../../assets/img/test-company.jpg";

const CompanyList = ({getMyCompanies, myCompanies, loadingOfMyCompanies}) => {
   useEffect(() => {
      getMyCompanies();
   }, [getMyCompanies]);

   return (
      <PersonalArea title="Мои компании">
         <PageLoading loading={loadingOfMyCompanies}>
            <div className="companies-container flex flex-wrap">
               {myCompanies.map(company => (
                  <Link to="/" className="companies-container__item">
                     <p className="companies-container-item__title">
                        {company.name}
                     </p>

                     <div className="companies-container-item__img">
                        <img src={TestImg} alt="Компания"/>
                     </div>

                     <div className="companies-container-item__update">
                        <Link to={`/company-products/${company.id}/update-company`}>
                           <Button block>
                              Редактирование компании
                           </Button>
                        </Link>

                        <Link to={`/company-products/${company.id}/update-category`}>
                           <Button block>
                              Редактирование категориев
                           </Button>
                        </Link>

                        <Link to={`/company-products/${company.id}/update-products`}>
                           <Button block>
                              Редактирование продуктов
                           </Button>
                        </Link>
                     </div>
                  </Link>
               ))}
            </div>
         </PageLoading>
      </PersonalArea>
   );
};

const mapStateToProps = state => ({
   myCompanies: state[companyModule].myCompanies,
   loadingOfMyCompanies: state[companyModule].loadingOfMyCompanies
});

const mapDispatchToProps = dispatch => ({
   getMyCompanies: () => dispatch(getMyCompanies())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CompanyList);