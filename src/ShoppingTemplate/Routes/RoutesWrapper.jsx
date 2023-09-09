import React from 'react'
import { Route } from 'react-router-dom'
const RoutesWrapper = ({path,element,exact}) => 
  (
 <React.Fragment>
    <Route
     path={path}
     element={element}
     exact={exact}
    />
    
 </React.Fragment>

  )


export default RoutesWrapper;