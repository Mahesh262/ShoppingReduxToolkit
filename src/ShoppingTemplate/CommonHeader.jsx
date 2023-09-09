import { Badge } from '@mui/material'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {  Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CommonHeader = () => {
    const prdts = useSelector(state=>state.cart)
    const itemsTotal= prdts.items.length;
  return (
    <div>
        
        <Navbar fixed style={{backgroundColor:"turquoise", }}>
            <Container style={{display:"flex", alignItems:"center"}}>
                <NavbarBrand>COIR</NavbarBrand>
                <Nav style={{display:"flex",alignItems:"center", justifyContent:"center",gap:"20px"}}>
                <Nav.Item> <Link to={`/`} style={{textDecoration:"none",color:'sienna'}}> Home </Link></Nav.Item>
                <Nav.Item>
                    <Link to= {`/Shop`}  style={{textDecoration:"none",color:'sienna'}}>
                  
                    <Badge badgeContent={itemsTotal > 0 ? itemsTotal : 0} color="secondary">
                        
                        Shop
                    </Badge>
                    </Link>
                </Nav.Item>
                <Nav.Item>Contact Us</Nav.Item>
                </Nav>
                <Nav>
       <Nav.Item> <Link to ={`/SearchComponent`}> <FaSearch/></Link> </Nav.Item>
</Nav>
            </Container>
        </Navbar>
        
        
        
        
        </div>
  )
}

export default CommonHeader