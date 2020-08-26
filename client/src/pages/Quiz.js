import React, { useEffect, useState } from "react";
//import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import MultiChoiceCard from "../components/MultiChoiceCard";
import { withRouter } from 'react-router-dom'
import {Col, Row, } from 'react-bootstrap';


function Quiz(props) {
    const [questions, setQuestions] = useState([])
    const [choices,setChoices]= useState([])

    useEffect(() => {
        loadQuestions()
    }, [])

    useEffect(() => {
        console.log(choices)
        if(choices.length===5){
            switchCase()
        }
    }, [choices])

    function loadQuestions() {
        API.getQuestions()
        .then(res=>{
            setQuestions(res.data)
            console.log(res)
        })
            .catch(err => console.log(err));
    };
    function loadChoices (event){
        console.log(event.target.alt)
        setChoices([...choices,event.target.alt])
    }

    function switchCase(){
        console.log(choices)
        var mode = a => {          
            var bestStreak = 1;
            var bestElem = a[0];
            var currentStreak = 1;
            var currentElem = a[0];
          
            for (let i = 1; i < a.length; i++) {
              if (a[i-1] !== a[i]) {
                if (currentStreak > bestStreak) {
                  bestStreak = currentStreak;
                  bestElem = currentElem;
                }
          
                currentStreak = 0;
                currentElem = a[i];
              }
          
              currentStreak++;
            }
          
            return currentStreak > bestStreak ? currentElem : bestElem;
          };
          console.log(mode(choices));
            switch(mode(choices)){
                case "1": props.history.push('/Destination/Dallas/')
                    break;
                case "2": props.history.push('/Destination/New_Orleans/')
                    break;
                case "3": props.history.push('/Destination/Boston/') 
                    break;
                case "4": props.history.push('/Destination/Denver/')
                    break;
                default: props.history.push('/Destination/Los_Angeles/')
                    break;
                
            }  
    }
    return (
        <Row>
            <Col size="md-12">
                <div >
                    {questions.map((question,i) =>  (
                        <div key={i}>
                            <MultiChoiceCard
                                answers={question.answers}
                                question={question.question}
                                loadChoices= {loadChoices}
                            />
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    )
}

export default withRouter(Quiz);








