import React from 'react';
import {Provider} from "react-redux";
import {ConfigProvider} from 'antd';
import {ConnectedRouter} from 'connected-react-router';

import ruRU from 'antd/es/locale/ru_RU';
import history from "./config/history";
import store from "./redux";

import ErrorBoundary from "./components/Containers/ErrorBoundary";

import Root from './components/Root';

const App = () => (
   <Provider store={store}>
      <ConfigProvider locale={ruRU}>
         <ConnectedRouter history={history}>
            <ErrorBoundary>
               <Root/>
            </ErrorBoundary>
         </ConnectedRouter>
      </ConfigProvider>
   </Provider>
);

export default App;
