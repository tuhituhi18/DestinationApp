import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import choices from "./choice.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Col, Row, Container } from "./components/Grid";
import API from "./utils/API";
import Destination from "./pages/Destination";

class App extends Component {
  state = {
    choices
  };

  render() {
    return (
      <Container>
        <Nav />
        {/*placeholder for the results from quiz */}
        <Destination
          city={["Houston", "Dallas", "Austin"][Math.floor(Math.random() * 3)]} />
        <Row>
          <Col size="md-4">
            <div>
              {this.state.choices.map(choice => (
                <MultiChoiceCard
                  id={choice.id}
                  key={choice.id}
                  name={choice.name}
                  image={choice.image}
                  occupation={choice.occupation}
                  location={choice.location}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
