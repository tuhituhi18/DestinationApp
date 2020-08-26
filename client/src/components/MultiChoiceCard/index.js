import React from "react";
import {Button, ButtonToolbar, ButtonGroup, Card} from "react-bootstrap";
//import "./style.css";
// import API from "../../utils"

function MultiChoiceCard(props) {
   return (
   <Card style= {{background: "#2E8BC0", border: "none"}}>
      <Card.Body style= {{color: "white"}}>
         <h3 style={{display: "flex",  justifyContent:"center", alignItems:"center"}}>{props.question}</h3>
            <ButtonToolbar size="lg" className="mb-2" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
               {props.answers.map((answer,i)=>{
                  return (
                     <ButtonGroup style={{display: "grid", gridTemplateColumns: "auto", padding: "10px",}}>
                        <Button style= {{background: "linear-gradient(#68BBE3,#003060)"}} key={i} onClick= {props.loadChoices}>
                           <img height = "200" width= "200" src= {answer["img"]} alt={(i+1)}/>
                           <h4>{answer["answer"+(i+1)]}</h4>
                        </Button>
                     </ButtonGroup>
                  )})}
            </ButtonToolbar>
      </Card.Body>
   </Card>
   );
}
export default MultiChoiceCard;