import React from "react";
import { Form, Col, ListGroup, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Card style= {{color: "white",fontFamily: "'Poppins', sans-serif",textAlign:"center"}}>
      <Card.Header as="h5" style= {{background: "#145DA0",alignItems:"baseline"}}>The Destiny Development Team</Card.Header>
        {/* <p>Creating new solutions to challenging problems</p> */}
        <Card.Body style= {{background: "#003060"}}>
          <Card.Title>Brandon Lopez
            <Card.Text style={{display:"block"}}>
                <a target="_blank" href="https://www.linkedin.com/in/brandon-lopez-280334106/"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" style={{height:"115px",paddingRight:"10px" }} alt="linkedIn logo"></img></a>
                <a target="_blank" href="mailto:brandon.i.lopez77@gmail.com" className="Email"><img src="https://tinyurl.com/y6p3bufm" style={{height:"170px",paddingRight:"5px"}} alt="email logo"></img></a>
                <a target="_blank" href="https://github.com/bl7722"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{height:"135px"}} alt="github logo"></img></a>
            </Card.Text>
          </Card.Title>
          <Card.Title>Harpreet Aulakh
            <Card.Text style={{display:"block"}}> 
              <a target="_blank" href="https://www.linkedin.com/in/harpreet-aulakh-houston-texas/"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" style={{height:"115px",paddingRight:"10px" }} alt="linkedIn logo"></img></a>
              <a target="_blank" href="mailto:h.aulakh2020@gmail.com" className="Email"><img src="https://tinyurl.com/y6p3bufm" style={{height:"170px",paddingRight:"5px"}} alt="email logo"></img></a>
              <a target="_blank" href="https://github.com/tuhituhi18"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{height:"135px"}} alt="github logo"></img></a>
            </Card.Text>
          </Card.Title>

        </Card.Body>
    </Card>

  )
}

export default Contact;
