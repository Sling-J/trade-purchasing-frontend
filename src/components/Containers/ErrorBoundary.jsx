import React, {Component} from "react";

import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import {urls} from "../../config/urls";

class ErrorBoundary extends Component {
   state = {
      hasError: false,
      errorMessage: null
   };

   static getDerivedStateFromError(error) {
      return {hasError: true, errorMessage: error};
   }

   componentDidCatch(error, errorInfo) {
      this.setState({hasError: true});
      console.log(error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         return (
            <Result
               style={{marginTop: 100}}
               status="warning"
               title="Есть некоторые проблемы с вашей работой."
               extra={
                  <Link to={urls.home.path}>
                     <Button type="primary" key="console">
                        Назад
                     </Button>
                  </Link>
               }
            />
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;