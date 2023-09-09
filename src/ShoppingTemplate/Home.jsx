import React from 'react'
import './AllinOne.css'
import { Link } from 'react-router-dom'
import './header.css'
const Home = () => {
  return (
    <div style={{ height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <h3><Link  to={`/Allinone`} className='liquid-button'> Explore Now </Link></h3>
    </div>
  )
}

export default Home
