import React from 'react';
import {Link} from "react-router-dom";

import {Card, Input, Tooltip, Button} from "antd";

import CardBg from "../../assets/img/test-company.jpg";
import {urls} from "../../config/urls";

const {Search} = Input;
const {Meta} = Card;

const Home = () => {

   return (
      <div className="home-container">
         <div className="home-container__nav flex j-sb fa-center">
            <h1 className="home-container-nav__title main-title">
               Все компании
            </h1>

            <Search
               className="home-container-nav__field"
               placeholder="Поиск компаний"
               onSearch={value => console.log(value)}
            />
         </div>

         <div className="home-container__companies flex flex-wrap">
            <Tooltip title="Yandex Group">
               <Card
                  className="home-container-companies__item"
                  cover={<img alt="Personal Area" src={CardBg}/>}
               >
                  <Meta
                     title="Yandex Group"
                     description="Деятельность компании: Занимается разработкой ПО"
                  />

                  <Link to={urls.companyProducts.path}>
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
         </div>
      </div>
   );
};

export default Home;