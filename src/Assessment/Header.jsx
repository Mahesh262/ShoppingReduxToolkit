import React from 'react'
import { Container, Col,NavItem, Navbar,Nav,Dropdown} from 'react-bootstrap'
import { Button } from '@mui/material'
import {BsSearch} from 'react-icons/bs'
import {RiShoppingBagFill, RiUserSearchFill} from 'react-icons/ri'
import './Header.css'
const Header = () => {
    
  return (
    <Navbar  bg='light' expand ='lg'>
<Container>
  <Col>
  <Navbar.Brand style={{width
    :"30%",textAlign:"center"}}>Medvaristy</Navbar.Brand>
  </Col>
    <Col>
    <Nav
        style={{display:'flex', alignItems:"center",flexDirection:"row",gap:"30px"}}
       >
 <div style={{ position: 'relative' }}>
 <Dropdown>
      <Dropdown.Toggle variant='none' id="my-dropdown" className="d-flex align-items-center">
        <RiUserSearchFill className="me-2" style={{color:"GrayText"}} fontSize={'17px'}/> <span style={{color:"GrayText"}}>Specialist </span>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ position: 'absolute', top: '100%', left: 0 }}>
      <Dropdown.Item>Action 1</Dropdown.Item>
        <Dropdown.Item>Action 2</Dropdown.Item>
        <Dropdown.Item>Action 3</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
 </div>
       <div><RiShoppingBagFill style={{color:"GrayText"}} fontSize={'17px'}/></div>

        </Nav> 
    </Col>   

<Col xl={4}>
<Nav
         style={{display:"flex",flexDirection:"row",gap:"20px", justifyContent:'flex-start',alignItems:"center"}}
        >

            <NavItem><BsSearch fontSize={'17px'}/></NavItem>
            <NavItem><Button 
             variant="contained"
             color="inherit" // sets the text color to black
             sx={{ backgroundColor: 'black',color:'whitesmoke',borderRadius: '20px' }} 
            >SignUP</Button></NavItem>
            <NavItem>
            <h5>Login </h5> </NavItem>

        </Nav>
</Col>
        
      

        </Container>
    </Navbar>
    
  )
}

export default Header
