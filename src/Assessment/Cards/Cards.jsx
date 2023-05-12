import React from 'react'
import { Card } from 'react-bootstrap'
const Cards = () => {
  return (
    <div>
      <Card className='p-0 overflow-hidden h-100 shadow'>
        <div className='overflow-hidden bg-light'>
         <img alt ='smaple'/>
        </div>
<Card.Body>
<p>text</p>
</Card.Body>
      </Card>
    </div>
  )
}

export default Cards
