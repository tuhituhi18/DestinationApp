import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';



function NavTabs(props) {

  return (
<Navbar style= {{background: "#003060",fontFamily: "'Poppins', sans-serif"}}>
  <Navbar.Brand style= {{color: "white", fontSize: "40px"}} href="/">Destiny</Navbar.Brand>
    <Nav className="mr-auto" >
      <ul className="nav nav-tabs" >
        <li className="nav-item" >
            <Link to="/Home" className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} style={{color: "white"}}  >
              Home
            </Link>
        </li>
        <li className="nav-item">
              <Link to="/Quiz"className={props.currentPage === "Quiz" ? "nav-link active" : "nav-link"} style={{color: "white"}} >
                Quiz
              </Link>
        </li>
        <li className="nav-item">
              <Link to="/Destination" className={props.currentPage === "Destination" ? "nav-link active" : "nav-link"} style={{color: "white"}} >
                Destination
              </Link>
        </li>
        <li className="nav-item">
              <Link to="/Contact" className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"} style={{color: "white"}} >
                Contact Us
              </Link>
        </li>
      </ul >
    </Nav>
  </Navbar>
  );
}

export default NavTabs;
