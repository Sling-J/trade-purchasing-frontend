import React from 'react';
import {Provider} from "react-redux";
import {ConfigProvider} from 'antd';
import {Router} from 'react-router-dom'

import ruRU from 'antd/es/locale/ru_RU';
import history from "./config/history";
import store from "./redux";

import ErrorBoundary from "./components/Containers/ErrorBoundary";

import Root from './components/Root';

const App = () => (
   <Provider store={store}>
      <ConfigProvider locale={ruRU}>
         <Router history={history}>
            <ErrorBoundary>
               <Root/>
            </ErrorBoundary>
         </Router>
      </ConfigProvider>
   </Provider>
);

export default App;
