import React from 'react';
import { Row, Col} from 'react-bootstrap';
import DynamicCard from './DynamicCard';
const Resume = () => {
  return (
    <div className="resume-container" id='Resume' style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1627398362552-6a029c1f583c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", 
       height:"120vh",
      backgroundSize:"cover", 
      overflow:"hidden"
    }}>
     <Row style={{textAlign:"center", padding:"5em",color:"wheat"}}> <h2>My <b>Resume</b></h2> </Row>
      <Row>
        <Row style={{padding:"3em",alignItems:"center", justifyContent:"center",color:"wheat"}}><Col style={{textAlign:"center"}}><b> Education </b></Col> <Col style={{textAlign:"center"}}> <b> Skills </b></Col></Row>
        <Col xs={12} md={6} style={{display:"flex",flexDirection:"column", justifyContent:"center", flexWrap:"wrap",gap:"50px"}}>
           <DynamicCard
            title="Graduation"
            Passout="2014-2017"
            description="This is the first card"
           />
           <DynamicCard
            title="InterMediate"
            Passout='2012-2014'
            description="This is the first card"
           />
           <DynamicCard
            title="SSC"
            Passout='2012'
            description="This is the first card"
           />
        </Col>
        <Col xs={12} md={6} style={{display:"flex",flexDirection:"column", justifyContent:"center", gap:"50px"}}>
        <DynamicCard
            title="React"
           />
           <DynamicCard
            title="javascript"
           />
           <DynamicCard
            title="Html/css"
           />
<DynamicCard
            title="Bootstrap/Redux"
           />
          
        </Col>
      </Row>
      
    </div>

  );
};

export default Resume;
