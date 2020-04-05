import React from "react";
import {Link, withRouter} from 'react-router-dom';

import {Breadcrumb} from 'antd';
import {HomeOutlined} from "@ant-design/icons";

import {urls} from "../../config/urls";

const breadcrumbNameMap = {
   [urls.personal.path]: urls.personal.name,
   [urls.profile.path]: urls.profile.name,
   [urls.orders.path]: urls.orders.name,
   [urls.cart.path]: urls.cart.name,
   [urls.wishes.path]: urls.wishes.name,
   [urls.companyProducts.path]: urls.companyProducts.name,
};
const Breadcrumbs = withRouter(props => {
   const {location} = props;
   const pathSnippets = location.pathname.split('/').filter(i => i);

   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

      return (
         <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
         </Breadcrumb.Item>
      );
   });

   const breadcrumbItems = [
      <Breadcrumb.Item key="home">
         <Link to="/">
            <HomeOutlined/> Главная
         </Link>
      </Breadcrumb.Item>,
   ].concat(extraBreadcrumbItems);

   return (
      <div className="breadcrumbs">
         <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </div>
   );
});

export default Breadcrumbs;