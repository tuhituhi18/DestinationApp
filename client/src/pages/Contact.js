import React from "react";
import { Form, Col, ListGroup } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <div className="jumbotron">
        <h1>The Destiny App Development Team</h1>
        <p>Creating new solutions to challenging problems.</p>

        <ListGroup variant="flush">
          <ListGroup.Item>Brandon Lopez{" "}{" "}{" "}| Contact Info: {" "}{" "} {" "}
            {/* <i class="far fa-envelope"></i>  */}
            <a href="mailto:brandon.i.lopez77@gmail.com" className="Email"> Email </a>
            <a href="https://www.linkedin.com/in/brandon-lopez-280334106/">LinkedIn</a>{" "}{" "}
            <a href="https://github.com/bl7722">GitHub</a>
          </ListGroup.Item>
          <ListGroup.Item>Harpreet Aulakh{" "} {" "} {" "}| Contact Info: {" "}{" "}{" "}
            <a href="mailto:h.aulakh2020@gmail.com" className="Email"> Email </a>
            <a href="https://www.linkedin.com/in/harpreet-aulakh-houston-texas/">LinkedIn</a>{" "}{" "}
            <a href="https://github.com/tuhituhi18">GitHub</a>
          </ListGroup.Item>
          <ListGroup.Item>Lewis Cruz{" "}{" "}{" "}| Contact Info: {" "}{" "}{" "}
            {/* Update Lewis's email if he stays */}
            <a href="mailto:lewis@gmail.com" className="Email"> Email </a>
            <a href="https://www.linkedin.com/in/lewis-c-2a775b1a8/">LinkedIn</a>{" "}{" "}
            <a href="https://github.com/lewismcruz">GitHub</a>
          </ListGroup.Item>

        </ListGroup>
      </div>
    </div>

  )
}

export default Contact;