import React, { Component } from 'react'
import { Grid, Row, Button, Col, ProgressBar } from 'react-bootstrap'
import Items from './items.js'

import './Test.css'

// const orderedTest = []
// const orderTest = function(elemment) {
//         items.forEach(function(element) {
//             // orderedTest.push(element.id)
//         })
//     }
//var i = 0;
    
//const randTest = orderedTest[Math.floor(Math.random() * orderedTest.length)]

class Test extends Component {       

       constructor() {
        super()

        this.state = {
            testResult: {
                k: 0,
                e: 0,
                a: 0,
                s: 0
            },

            i: 0

            // actualItem: {
            //     question: Items[this.state.i].question,
            //     answer1: Object.keys([Items[this.state.i].answers[0]),
            //     answer2: Object.keys([Items[this.state.i].answers[1]),
            //     answer1value: Object.values([Items[this.state.i].answers[0]),
            //     answer2value: Object.values([Items[this.state.i].answers[1])
            // }
        }

        //console.log(Items[this.state.i].question)
        console.log(Object.keys([this.state.i].answers))
    }
    
    onAnswerInput = (event) => {
      console.log(event.target.value)
        this.setState({[testResult.event.target.value]: ++this.state.testResult[testResult.event.target.value]});
        this.setState({i:++i})
    }
    
   render () {
      return (<Grid>
        <div className="question-block">
          <p className="lead">{/*actualItem.question*/}</p>
          <hr/>
          <Row>
            <Col sm={6} smOffset={3}>
              <Button bsStyle="primary" bsSize="large" block {/*onClick={{this.onAnswerInput}}*/} value=""{/*actualItem.answer1value}>{actualItem.answer1*/}></Button>
              <Button bsStyle="primary" bsSize="large" block {/*onClick={this.onAnswerInput}*/} value=""{/*actualItem.answer2value}>{actualItem.answer2*/}></Button>
            </Col>
          </Row>                
        </div>
        <ProgressBar active now=""{/*(this.state.i)/30*100*/} />
      </Grid>
    )
  }
}
  
export default Test