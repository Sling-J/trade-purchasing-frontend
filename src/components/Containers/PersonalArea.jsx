import React from 'react';

import PersonalSideBar from "../Personal/PersonalSideBar";

const PersonalArea = ({children, title}) => {
   return (
      <div className="personal-container">
         <h1 className="personal-container__title main-title">{title}</h1>

         <div className="personal-container__box flex j-sb">
            <div className="personal-container__main">
               {children}
            </div>

            <PersonalSideBar/>
         </div>
      </div>
   );
};

export default PersonalArea;