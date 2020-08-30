import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';
import Boston from "../components/Images/Boston.jpg"
import Chicago from "../components/Images/Chicago.jpg"
import denver from "../components/Images/denver.jpg"
import Houston from "../components/Images/Houston.jpg"
import LA from "../components/Images/LA.png"
import miami from "../components/Images/miami.jpg"
import newOrleans from "../components/Images/newOrleans.jpg"
// import montereybay from "../components/Images/montereybay.jpeg"

// import philadelphia from "../components/Images/philadelphia.jpeg"
// import charleston from "../components/Images/charleston.jpeg"
// import sanfrancisco from "../components/Images/sanfrancisco.jpeg"
// import sandiego from "../components/Images/sandiego.jpeg"

// import orlando from "../components/Images/orlando.jpeg"
// import jackson from "../components/Images/jackson.jpg"
// import dallas from "../components/Images/dallas.jpg"
// import burlington from "../components/Images/burlington.jpg"


function ListOfCities() {
    return (
        <div >
            <br></br>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , color: "white",fontStyle: "italic"}}>
                Find Your Destiny!
            </h1>
            <br></br>
            <Row>
                <Col>
                    <Link to="/Destination/Boston">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Boston <br></br>
                            <img height="200" width="200" src={Boston} alt={"Boston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Dallas">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Dallas <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/dallas.jpg"} alt={"Dallas"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Los_Angeles">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Los Angeles <br></br>
                            <img height="200" width="200" src={LA} alt={"Los Angeles"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Orlando2C_Florida">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Orlando <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/orlando.jpeg"} alt={"Orlando"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>
                </Col>
                <Col>

                    <Link to="/Destination/Burlington2C_Vermont">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Burlington <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/burlington.jpg"} alt={"Burlington"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>


                    <Link to="/Destination/Denver">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Denver <br></br>
                            <img height="200" width="200" src={denver} alt={"Denver"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Miami">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Miami <br></br>
                            <img height="200" width="200" src={miami} alt={"Miami"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Philadelphia">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Philadelphia <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/philadelphia.jpeg"} alt={"Philadelphia"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                </Col>
                <Col>
                    <Link to="/Destination/Charleston2C_South_Carolina">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Charleston <br></br>
                            <img height="200" width="200" src={"https://img-aws.ehowcdn.com/560x560p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/8a4fe0aa79a847afb46e479a25804886"} alt={"Charleston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Houston">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Houston <br></br>
                            <img height="200" width="200" src={"https://img-aws.ehowcdn.com/560x560p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/caba3e6c064f4b009c64d1f34f7b5996.jpg"} alt={"Houston"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Monterey2C_California">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Monterey Bay <br></br>
                            <img height="200" width="200" src={"https://visitmontereybay.files.wordpress.com/2015/08/6be492c8d1f762e2517306524b5fc985.jpg"} alt={"Monterey Bay"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/San_Diego">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">San Diego <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/sandiego.jpeg"} alt={"San Diego"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                </Col>
                <Col>
                    <Link to="/Destination/Chicago">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Chicago <br></br>
                            <img height="200" width="200" src={Chicago} alt={"Chicago"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/Jackson2C_Wyoming">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">Jackson <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/jackson.jpg"} alt={"Jackson"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>

                    <Link to="/Destination/New_Orleans">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">New Orleans <br></br>
                            <img height="200" width="200" src={newOrleans} alt={"New_Orleans"} />
                        </Button>{' '}
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/Destination/San_Francisco">
                        <Button style= {{background: "linear-gradient(#003060,#68BBE3)"}} size="lg">San Francisco <br></br>
                            <img height="200" width="200" src={"https://raw.githubusercontent.com/tuhituhi18/DestinyApp/harpreet/client/src/components/Images/sanfrancisco.jpeg"} alt={"San Francisco"} />
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