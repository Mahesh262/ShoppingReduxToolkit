import React from 'react'
import { Row,Col ,Card} from 'react-bootstrap'
import { Button } from '@mui/material';
import {AiFillStar} from 'react-icons/ai'
import Coursepack from './Coursespackage.png'
const TrendingCourse = () => {
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
        
       
        
    
      ];
  return (
    <div>
      <Row xl={12} style={{display:"flex",flexWrap:"wrap"}}>
        <Col xl={12} style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around", alignItems:"center"}}>
        <div><h1>Trending Courses  </h1></div>
        <div> view all</div>
        <div><h1> Featured </h1></div>
        <div>View all</div>
        </Col>
<Col xl={6} style={{display:"flex",flexWrap:"wrap",overflow:"hidden"}}>


        {items.map((item,i)=>{

            return(
         <Col xl={6} md={6}key={i}>
        <Card style={{ backgroundImage: `url(${item.image})`,backgroundPosition:"fixed",backgroundSize: 'cover',height: '20em',gap:"20px",width:"250px",borderRadius:"30px"}}>
           <div className='pt-5' style={{display:"flex", justifyContent:"flex-end"}}> <p style={{borderRadius:"20px",padding:"6px",width:"140px",textAlign:"center", backgroundColor:"wheat"}}> {item.title} </p></div>
          <Card.Body style={{paddingTop:"95px"}}>
            <Card.Text>
            <h4>{item.description}</h4>
            </Card.Text>
            <Card.Footer  style={{display:'flex', flexDirection:'row', alignItems:"center", top:"20px",justifyContent:"space-between"}}>
<Button color='secondary'>Preview</Button>
<AiFillStar rating={item.rating}/>
</Card.Footer>
        </Card.Body>  

       
      </Card>
        
        </Col>
                
            )
        })}
       
       </Col>
       <Col xs={6}>
           
            <Card style={{ backgroundImage: `url(${'https://cdn.pixabay.com/photo/2013/07/18/10/59/human-skeleton-163715_1280.jpg'})`, backgroundPosition:"center",backgroundSize: 'cover',height: '100%',width:"100%",borderRadius:"30px"}}>
           <Card.Title  className='pt-5 mx-5' style={{textAlignLast:'end'}}> Human anotomy</Card.Title>
          <Card.Body style={{paddingTop:"150px"}}>
            
        </Card.Body>
<Card.Footer  style={{display:'flex', flexDirection:'row', alignItems:"center", justifyContent:"space-around"}}>
<Card.Text>
            <h4>Description</h4>
            </Card.Text>
<Button color='secondary'>Preview</Button>
<AiFillStar/>
</Card.Footer>
       
      </Card>
        
        </Col>
        {/* Smilutions Webminors */}
        <Col xl={12} style={{display:"flex",paddingTop:"20px",gap:"20px", alignItems:"center",justifyContent:"center"}}>

        <div><Card style={{borderRadius:"20px", width:"220px",padding:"30px",backgroundColor:"orange"}}> Simualtions </Card> </div>
        <div><Card style={{borderRadius:"20px", width:"250px",padding:"30px",backgroundColor:"orange"}}>  Events & seminars</Card> </div>
        </Col>

<Col xl={12} md={12} sm={12} style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"20px"}}>
    <Col xl={12} style={{textAlign:"center"}}><h1> An Immensive learning Experience </h1></Col>
    <Col xl={4}>
        <Card style={{borderRadius:"50px", width:"90%",boxShadow:"2px 2px 2px 2px  #888888", height:"300px", borderColor:"wheat"}}>
         <Card.Body>
            <h1 style={{color:"orange", fontSize:"5em"}}>1500+</h1>
            <h5>Medical Cases</h5>
            <p>Interactive cas studies for perecise diagnosis and  customised  treamnent plans</p>
            </Card.Body>   
        </Card>
    </Col>
   
    <Col xl={4}>
        <Card style={{borderRadius:"50px", width:"90%",height:"300px",boxShadow:"2px 2px 2px 2px  #888888", borderColor:"wheat"}}>
         <Card.Body>
            <h1 style={{color:"orange", fontSize:"5em"}}>200+</h1>
            <h5>Simulation</h5>
            <p>Interactive cas studies for perecise diagnosis and  customised  treamnent plans</p>
            </Card.Body>   
        </Card>
    </Col>
    <Col xl={4}>
        <Card style={{borderRadius:"50px", width:"90%", height:"300px", boxShadow:"2px 2px 2px 2px  #888888",borderColor:"wheat"}}>
         <Card.Body>
            <h1 style={{color:"orange",fontSize:"5em"}}>5000+</h1>
            <h5>Medical Cases</h5>
            <p>Interactive cas studies for perecise diagnosis and  customised  treamnent plans</p>
            </Card.Body>   
        </Card>
    </Col>
</Col>

{/* Course Journey */}
<Col xl={12} style={{paddingTop:"20px"}}>
<Col>
<Card style={{borderRadius:"20px", boxShadow:"2px 2px 2px 2px #888888"}}>
  <img src={Coursepack} alt ="CoursePack" style={{width:"100%"}}/>
</Card>
</Col>

</Col>

      </Row>

    </div>
  )
}

export default TrendingCourse
