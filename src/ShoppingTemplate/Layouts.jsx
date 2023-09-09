import React from 'react'
import CommonHeader from './CommonHeader'

const Layouts = ({children}) => {
  return (
    <div>
        
    <CommonHeader/>
        
    <div>{children}</div>
        
        
        </div>
  )
}

export default Layouts