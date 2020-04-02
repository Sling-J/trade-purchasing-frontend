import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import ErrorBoundary from "./components/Containers/ErrorBoundary";

import Root from './components/Root';

const App = () => (
   <ErrorBoundary>
      <Router>
         <Root/>
      </Router>
   </ErrorBoundary>
);

export default App;
