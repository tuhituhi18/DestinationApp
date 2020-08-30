import React, { useState } from "react";
//import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../../firebase";
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);


  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
  <Form className="text-3xl mb-2 text-center font-bold"
    style={{ fontFamily: "'Poppins', sans-serif",height: "660px",justifyContent:"center",backgroundImage: "url(https://tinyurl.com/y2d49lo7)", color: "white",height: "95vh",display:"flex"}}>
      <div className="mt-8">{/* style={{top: "50%"}} */}
        <div  style={{paddingTop: "13vh",height: "100vh", fontSize:"30px"}}>
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <div style={{backgroundColor:"rgba(46, 139, 192, 0.9)",display:"block",}}>
            <h1 className="text-3xl mb-2 text-center font-bold" style={{fontSize:"65px"}}>Sign Up</h1>
            <Form.Label style={{display: "flex",justifyContent:"center", alignItems:"center",}}></Form.Label>{" "}
                <input 
                  type="text"
                  className="my-1 p-1 w-full "
                  name="displayName"
                  value={displayName}
                  placeholder="Name"
                  id="displayName"
                  onChange={event => onChangeHandler(event)}
                  style={{width: "250px"}}
                />{/* <label htmlFor="userEmail" className="block">Email:</label> */}
                <br></br>
            <Form.Label style={{display: "flex",  justifyContent:"center", alignItems:"center",}}></Form.Label>{" "}
                <input
                  type="email"
                  className="my-1 p-1 w-full"
                  name="userEmail"
                  value={email}
                  placeholder="Email"
                  id="userEmail"
                  onChange={event => onChangeHandler(event)}
                  style={{width: "250px"}}
                />{/* <label htmlFor="userPassword" className="block">Password:</label> */}
                <br></br>
            <Form.Label style={{display: "flex",  justifyContent:"center", alignItems:"center",color:"white",}}></Form.Label>{" "}
                <input
                  type="password"
                  className="mt-1 mb-3 p-1 w-full"
                  name="userPassword"
                  value={password}
                  placeholder="Password"
                  id="userPassword"
                  onChange={event => onChangeHandler(event)}
                  style={{width: "250px"}}
                />
                <br></br>
            <Button  type="submit" style={{color: "white", fontSize: "30px",backgroundColor: "#003060"}}>
              <Link to="/Quiz" style={{color: "white"}}>Sign up</Link>
            </Button>
              <p className="text-center my-3">
                  <Link to="signUp" style={{color: "#f0ead6"}}>Login here</Link>
                      <br />
                  <Link to="passwordReset" style={{color: "#f0ead6",}}>Forgot Password?</Link>
              </p>{/* style={{color:"#f0ead6"}} */}
          </div>
        </div>
      </div>
  </Form>
  );
};
export default SignUp;