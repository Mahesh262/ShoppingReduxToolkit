import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrementQuantity, remove } from './Store/UserSlice'

const Shop = () => {
   const product= useSelector(state=>state.cart)
     
    const dispatch= useDispatch()
    const total = product.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotal = total.toFixed(2);
  return (
    <Row className='pt-5'>
         {product.items?.map((items,index)=>{
          return(
            <Card key={index} style={{display:"flex", alignItems:"center"}}>
               <img src={items.image} alt={items.title} style={{width:"300px",}}/>
              <h3>Product Price</h3>
              <p>price: ${items.price}</p>
              <div style={{display:'flex', flexDirection:"row", justifyContent:"space-around", width:"300px"}}>

                <p style={{width:'30px'}}  onClick={()=>dispatch(incrementQuantity(items))}><FaPlus/></p>
                <p style={{width:"30px"}} onClick={()=>dispatch(decrement(items))}><FaMinus/></p>
                <p onClick={()=>dispatch(remove(items))}><AiOutlineDelete/></p>
              </div>
              <Card.Footer>
                <h2>{items.quantity}</h2>
                <h3>Total price${formattedTotal}</h3>
                </Card.Footer>
            </Card>
          )
         })}
      </Row>
  )
}

export default Shop