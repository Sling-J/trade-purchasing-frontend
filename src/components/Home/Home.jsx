import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import {Card, Input, Tooltip, Button} from "antd";

import {getCompanies, moduleName as companyModule} from "../../ducks/Company";
import PageLoading from "../Containers/PageLoading";

import {sliceExtraText} from "../../config/utils";

import TestImg from '../../assets/img/test-company.jpg'

const {Search} = Input;
const {Meta} = Card;

const Home = ({getCompanies, companies, loadingOfCompanies}) => {
   const [displayedCountries, setDisplayedCountries] = useState([]);

   useEffect(() => {
      setDisplayedCountries(companies)
   }, [companies]);

   useEffect(() => {
      getCompanies()
   }, [getCompanies]);

   const dynamicSearch = event => {
      const searchQuery = event.target.value.toLowerCase();

      const displayedCountries = companies.filter(el => {
         const searchVal = el.name.toLowerCase();
         return searchVal.indexOf(searchQuery) !== -1;
      });

      setDisplayedCountries(displayedCountries);
   };

   return (
      <PageLoading loading={loadingOfCompanies}>
         <div className="home-container">
            <div className="home-container__nav flex j-sb fa-center">
               <h1 className="home-container-nav__title main-title">
                  Все компании
               </h1>

               <Search
                  className="home-container-nav__field"
                  placeholder="Поиск компаний"
                  onChange={dynamicSearch}
               />
            </div>

            <div className="home-container__companies flex flex-wrap">
               {displayedCountries.map((company, idx) => (
                  <Tooltip title={company.name} key={idx}>
                     <Card
                        className="home-container-companies__item"
                        cover={<img alt="Personal Area" src={TestImg}/>}
                     >
                        <Meta
                           title={company.name}
                           description={sliceExtraText(company.description, 32)}
                        />

                        <Link to={`/company-products/${company.id}`}>
                           <Button
                              className="home-container-companies-item__more"
                              type="primary"
                              size="small"
                              block
                           >
                              Подробнее
                           </Button>
                        </Link>
                     </Card>
                  </Tooltip>
               ))}
            </div>
         </div>
      </PageLoading>
   );
};

const mapStateToProps = state => ({
   companies: state[companyModule].companies,
   loadingOfCompanies: state[companyModule].loadingOfCompanies,
});

const mapDispatchToProps = {
   getCompanies
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Home);