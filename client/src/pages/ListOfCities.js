import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';
import Boston from "../components/Images/Boston.jpg"
import Chicago from "../components/Images/Chicago.jpeg"
import denver from "../components/Images/denver.jpg"
import Houston from "../components/Images/Houston.jpg"
import LA from "../components/Images/LA.png"
import miami from "../components/Images/miami.jpg"
import newOrleans from "../components/Images/newOrleans.jpg"
import montereybay from "../components/Images/montereybay.jpeg"

import philadelphia from "../components/Images/philadelphia.jpeg"
import charleston from "../components/Images/charleston.jpeg"
import sanfrancisco from "../components/Images/sanfrancisco.jpeg"
import sandiego from "../components/Images/sandiego.jpeg"

import orlando from "../components/Images/orlando.jpeg"
import jackson from "../components/Images/jackson.jpg"
import dallas from "../components/Images/dallas.jpg"
import burlington from "../components/Images/burlington.jpg"


function ListOfCities() {
    return (
        <div >
            <br></br>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Click on the city for your next adventure!</h1>
            <br></br>
            <Row>
                <Col>
                    <Link to="/Destination/Boston">
                        <Button variant="info" size="lg">Boston <br></br>
                            <img height="200" width="200" src={Boston} alt={"Boston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Dallas">
                        <Button variant="info" size="lg">Dallas <br></br>
                            <img height="200" width="200" src={dallas} alt={"Dallas"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Los_Angeles">
                        <Button variant="info" size="lg">Los Angeles <br></br>
                            <img height="200" width="200" src={LA} alt={"Los Angeles"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Orlando2C_Florida">
                        <Button variant="info" size="lg">Orlando <br></br>
                            <img height="200" width="200" src={orlando} alt={"Orlando"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>
                </Col>
                <Col>

                    <Link to="/Destination/Burlington2C_Vermont">
                        <Button variant="info" size="lg">Burlington <br></br>
                            <img height="200" width="200" src={burlington} alt={"Burlington"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>


                    <Link to="/Destination/Denver">
                        <Button variant="info" size="lg">Denver <br></br>
                            <img height="200" width="200" src={denver} alt={"Denver"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Miami">
                        <Button variant="info" size="lg">Miami <br></br>
                            <img height="200" width="200" src={miami} alt={"Miami"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Philadelphia">
                        <Button variant="info" size="lg">Philadelphia <br></br>
                            <img height="200" width="200" src={philadelphia} alt={"Philadelphia"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                </Col>
                <Col>
                    <Link to="/Destination/Charleston2C_South_Carolina">
                        <Button variant="info" size="lg">Charleston <br></br>
                            <img height="200" width="200" src={charleston} alt={"Charleston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Houston">
                        <Button variant="info" size="lg">Houston <br></br>
                            <img height="200" width="200" src={Houston} alt={"Houston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Monterey2C_California">
                        <Button variant="info" size="lg">Monterey Bay <br></br>
                            <img height="200" width="200" src={montereybay} alt={"Monterey Bay"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/San_Diego">
                        <Button variant="info" size="lg">San Diego <br></br>
                            <img height="200" width="200" src={sandiego} alt={"San Diego"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                </Col>
                <Col>
                    <Link to="/Destination/Chicago">
                        <Button variant="info" size="lg">Chicago <br></br>
                            <img height="200" width="200" src={Chicago} alt={"Chicago"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Jackson2C_Wyoming">
                        <Button variant="info" size="lg">Jackson <br></br>
                            <img height="200" width="200" src={jackson} alt={"Jackson"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/New_Orleans">
                        <Button variant="info" size="lg">New Orleans <br></br>
                            <img height="200" width="200" src={newOrleans} alt={"New_Orleans"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/Destination/San_Francisco">
                        <Button variant="info" size="lg">San Francisco <br></br>
                            <img height="200" width="200" src={sanfrancisco} alt={"San Francisco"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                </Col>
            </Row>
        </div >
    )
}


export default ListOfCities;