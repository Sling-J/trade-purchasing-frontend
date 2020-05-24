import React from 'react';

import {Spin} from "antd";

const PageLoading = ({loading, children}) => (
   <Spin spinning={loading}>
      {children}
   </Spin>
);

export default PageLoading;