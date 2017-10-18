import React, { Component } from 'react'
import { Grid, Row, Button, Col, ProgressBar } from 'react-bootstrap'

import './Test.css'

const items = [{
        id: 1,
        question: "Are you more comfortable, as a player in an online game:",
        answers: {
            "Talking with friends in a tavern": "s",
            "Out hunting orcs by yourself for experience?": "a"
        }
    },
    {
        id: 2,
        question: "Which do you enjoy more in quests?",
        answers: {
            "Getting involved in the storyline": "s",
            "Getting the rewards at the end": "a"
        }
    },
    {
        id: 3,
        question: "Would you rather be:",
        answers: {
            "Popular?": "s",
            "Wealthy?": "a"
        }
    }
]

class Test extends Component {

       constructor() {
        super()

        this.state = {
            testResult: {
                'k': 0,
                'e': 0,
                'a': 0,
                's': 0
            }

            //actualQuestion: {

           // }
        }
    }

    
    // const question = items.question
    // const answer1 = Object.keys(this.answers)[0];
    // const answer2 = Object.keys(this.answers)[1];
    // const answer1value = Object.values(element.items[0]);
    // const answer2value = Object.values(element.items[1])];

    
    onAnswerInput = (event) => {
        console.log(event.target.value)
        //this.setState({++testResult.event.target.value})
    }
    
   render () {
      return (
        <Grid>
            <div className="question-block">
              <p className="lead">{items.question}</p>
              <hr/>
              <Row>
                <Col sm={6} smOffset={3}>
                  <Button bsStyle="primary" bsSize="large" block onClick={this.onAnswerInput}></Button>
                  <Button bsStyle="primary" bsSize="large" block onClick={this.onAnswerInput}></Button>
                </Col>
              </Row>                
            </div>
            <ProgressBar active now={45} />
        </Grid>
     )
  }
}
export default Test