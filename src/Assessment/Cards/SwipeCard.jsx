import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Card, Container,Col,Row} from 'react-bootstrap';
import { Button } from '@mui/material';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai'
import '../Header.css'
const SwipeCard = () => {
    
  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description of item 1',
      rating:4.5,
      image:'https://cdn.pixabay.com/photo/2013/07/18/10/59/human-skeleton-163715_1280.jpg',
    },
    {
      id: 2,
      title: 'Item 2',
      rating:4.5,

      description: 'Skeleton with organs',
      image:"https://cdn.pixabay.com/photo/2017/04/25/22/22/anatomical-2261006_960_720.jpg"
    },
    {
      id: 3,
      title: 'Item 3',
      rating:4.5,

      description: 'Description of item 3',
      image:"https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?w=360&t=st=1683784896~exp=1683785496~hmac=dafeef09482b54727258b7ceebeed66eac47b66fc5859d5b5081231e5c5cc5c3"
    },
    {
      id: 4,
      title: 'Item 4',
      rating:4.5,

      description: 'Description of item 4',
      image:"https://img.freepik.com/free-photo/3d-render-medical-background-with-vitruvian-style-male-figure_1048-13021.jpg?w=740&t=st=1683784947~exp=1683785547~hmac=04363b4aff9d3ccd6de04f57a9a00b8191d6fb95e837f8699fb8e93574bb662a"
    },
    {
      id: 5,
      title: 'Item 4',
      rating:4.5,

      description: 'Description of item 5',
      image:"https://img.freepik.com/free-vector/anatomical-structure-human-body_1308-109679.jpg?size=626&ext=jpg&ga=GA1.1.98511159.1643170544&semt=ais"
    },
    {
      id: 6,
      title: 'Item 6',
      rating:4.5,

      description: 'Description of item 6',
      image:"https://img.freepik.com/free-photo/human-body_1048-5346.jpg?size=626&ext=jpg&ga=GA1.1.98511159.1643170544&semt=ais"
    },
    {
      id: 7,
      title: 'Item 7',
      rating:4.5,
      
      description: 'Description of item 7',
      image:"https://img.freepik.com/free-photo/human-body-legs_1048-4907.jpg?size=626&ext=jpg&ga=GA1.1.98511159.1643170544&semt=ais"
    },
    {
      id: 8,
      title: 'Item 8',
      rating:4.5,

      description: 'Description of item 8',
      imaage:"https://img.freepik.com/free-photo/3d-render-male-medical-figure-with-lower-leg-muscles-highlighted_1048-12792.jpg?size=626&ext=jpg&ga=GA1.1.98511159.1643170544&semt=ais"
    },
    {
      id: 9,
      title: 'Item 9',
      rating:4.5,

      description: 'Description of item 9',
      image:"https://img.freepik.com/free-photo/3d-male-medical-figure-sit-up-pose-with-stomach-muscles-highlighted_1048-15972.jpg?w=360&t=st=1683785192~exp=1683785792~hmac=d7c6b2ac79b1ce34dd2ae7f17880496ffeebfa28b130bfceb91cb95be1ac446a"
    },
  ];
  
  return (
    
    <Container>
      
      <Row>

        <Swiper
       freeMode={true}
       grabCursor={true}
       modules={FreeMode}
        slidesPerView={2}
        spaceBetween={30}
        className='mySwiper'
        // style={{ border:"2px solid green"}}
      >
        

        
        
        {items.map((item,i)=>{
          return(

<SwiperSlide key={i} style={{height:"400px",borderRadius:"30px"}}>
          <Card style={{ backgroundImage: `url(${item.image})`,backgroundSize: 'cover',height: '400px',borderRadius:"30px"}}>
           <div className='pt-5' style={{display:"flex", justifyContent:"flex-end"}}> <p style={{borderRadius:"20px",padding:"6px",width:"140px",textAlign:"center", backgroundColor:"wheat"}}> {item.title} </p></div>
          <Card.Body style={{paddingTop:"150px"}}>
            <Card.Text>
            <h4>{item.description}</h4>

            </Card.Text>
        </Card.Body>
<Card.Footer  style={{display:'flex', flexDirection:'row', alignItems:"center", justifyContent:"space-around"}}>
<Button color='secondary'>Preview</Button>
<AiFillStar rating={item.rating}/>


</Card.Footer>
       
      </Card>

          </SwiperSlide>
          
          
          )
        })}

      </Swiper> 
        
        
        
        
        
        
        

      </Row>
      
      

      

    </Container>
    
      
  )
}

export default SwipeCard
