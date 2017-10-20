import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Button, Col, ProgressBar } from 'react-bootstrap'
import Items from './items.js'
import { LinkContainer } from 'react-router-bootstrap'

import './Test.css'

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

            i: -1,
            showResults: false
        }

        this.actualItem = {
              question: Items[0].question,
              answer1: Object.keys(Items[0].answers)[0],
              answer2: Object.keys(Items[0].answers)[1],
              answer1value: Object.values(Items[0].answers)[0],
              answer2value: Object.values(Items[0].answers)[1]
          }
      }
    
    onAnswerInput = (event) => {
      //console.log(this.state)

      const i = this.state.i + 1
      const data = event.target.getAttribute('data')
      
      if (i < Items.length - 1) {
        this.setState(function(prevState) {
              prevState.testResult[data]++
              prevState.i = i
            
              return prevState
          })
      } else if (i === Items.length - 1) {
          this.setState(function(prevState) {
              prevState.testResult[data]++
              prevState.i = i
            
              return prevState
          })

          setTimeout(() => {
              this.setState(function(prevState) {
                  prevState.showResults = true
                
                  return prevState
              })
          }, 800)      
      }

        
      if (i < Items.length - 1) {
        this.actualItem = {
          question: Items[i + 1].question,
          answer1: Object.keys(Items[i + 1].answers)[0],
          answer2: Object.keys(Items[i + 1].answers)[1],
          answer1value: Object.values(Items[i + 1].answers)[0],
          answer2value: Object.values(Items[i + 1].answers)[1]
        }
      } 
    }
   
  
   render () { 
   if (!this.state.showResults) {
      console.log('show question', this.state.i)
      return (<Grid>
        <div className="question-block">
          <p className="lead">{this.actualItem.question}</p>
          <hr/>
          <Row>
            <Col sm={6} smOffset={3}>
              <Button bsStyle="primary" bsSize="large" block onClick={this.onAnswerInput} data={this.actualItem.answer1value}>{this.actualItem.answer1}</Button>
              <Button bsStyle="primary" bsSize="large" block onClick={this.onAnswerInput} data={this.actualItem.answer2value}>{this.actualItem.answer2}</Button>
            </Col>
          </Row>                
        </div>
        <ProgressBar active now={(this.state.i + 1)/Items.length*100}/>
      </Grid>
    )
    } else {
      console.log(this.state.testResult)
      return (<Grid className="results">
        
        <div className="question-block">  
        <Row>
              <LinkContainer to="/results">
                  <Button text-center bsStyle="primary" block bsSize="large" data-value={this.state.testResult}><h2>Show me the results!</h2></Button>
              </LinkContainer>
           
          </Row>
          </div>  
          
          </Grid>
              )
    }
  }
}
  
export default Test