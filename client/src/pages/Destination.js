import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";
import Contact from "./Contact";
import { Alert, Card, Button, Col, Spinner } from 'react-bootstrap';
//import { Link } from "@reach/router";
import { Link } from "react-router-dom";


function Destination() {
    const [state, setState] = useState({})
    const [tour, setTour] = useState({})
    const { city } = useParams()
    useEffect(() => {
        API.fetchDestination(city)
            .then(destination => {
            setState(destination.data.results[0]);
            console.log(destination.data);
        API.fetchTour(city).then(tourResults => {
            setTour(tourResults.data.results[0]);
            console.log(tourResults.data);}).catch(err => console.log(err));
            }).catch(err => console.log(err));
            }, [])
if (state.images, tour.name) {
    return (
        <div style= {{color: "white",fontFamily: "'Poppins', sans-serif", paddingTop: "20px"}}>
            <Alert.Heading>Your Next Destination is...</Alert.Heading>
                <h2 style={{fontWeight: "bold"}}>{state.id}, {state.parent_id} </h2>
                <img src={state.images[0].source_url} rounded style={{ height: "50%", width: "80%",position:"relative",paddingBottom:"10px"}} />
                <h5 style={{paddingBottom:"10px"}}>{state.snippet}</h5>
            <Card style= {{background: "#145DA0"}}>
                <Card.Header as="h5" style= {{background: "#145DA0"}}>Available Tours in {state.id}</Card.Header>
                    <Card.Body style= {{background: "#003060",}}>
                        <Card.Title>Tour: {tour.name}</Card.Title>
                        <Card.Text style= {{fontSize: "19px"}}>Price: ${tour.price.amount * 1.15.toFixed(0)}</Card.Text>
                        <Button style= {{background: "#145DA0"}} href={tour.vendor_tour_url} target="_blank">Find out more </Button>
                    </Card.Body>
            </Card>
         <br></br>
            <Link to="/Destination" style={{color:"white",fontSize: "20px",paddingBottom: "30px"}}> 
                &larr; Back to View More Cities
            </Link>
        </div>
    )
}
else { return (
<Spinner variant="info" animation="border" role="status" >
    <span className="sr-only">Loading...</span>
</Spinner>) 
}
}


export default Destination;