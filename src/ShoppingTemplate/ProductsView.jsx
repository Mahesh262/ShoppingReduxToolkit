import React from 'react'
import { Card ,Row,Col} from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductsView = () => {
   const cartItems= useSelector(state=>state.cart)
  return (
    <div style={{backgroundClip:"blue"}}>
        {cartItems.items?.map((items,index)=>{
            return(<>
                <Row key={index}>
                    <Col xl={4}>
        <Card>
                  <Card.Body>
                    <img src={items.image} alt={items.title} style={{width:'10em'}}/> 
                  </Card.Body>
                  <Card.Title style={{whiteSpace:'pre-wrap'}}>{items.title} </Card.Title> 
                   </Card>
                    </Col>
                    <Col xl={4}className='pt-5'>
                    <h5>Price:${items.price}</h5>
                    <p style={{whiteSpace:"pre-wrap"}}>{items.description}</p>
                    <p>Rating: {items.rating.rate}</p>
                     <p><Link to={`/Shop`}><AiOutlineShoppingCart style={{fontSize:"3em",color:"tomato"}}/></Link></p>
                    </Col>
                 
                    
                </Row>
            
            </>)
        })}
    </div>
  )
}

export default ProductsView