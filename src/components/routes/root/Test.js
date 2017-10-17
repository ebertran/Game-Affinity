import React from 'react'
import { Grid, Row, Button, Col, ProgressBar } from 'react-bootstrap'

import './Test.css'

const Test = () => (
  <Grid>
    <div className="question-block">
      <p className="lead">Are you more comfortable, as a player in an online game:</p>
      <hr/>
      <Row>
        <Col sm={6} smOffset={3}>
          <Button bsStyle="primary" bsSize="large" block>Talking with friends in a tavern</Button>
          <Button bsStyle="primary" bsSize="large" block>Out hunting orcs by yourself for experience?</Button>
        </Col>
      </Row>                
    </div>
    <ProgressBar active now={45} />
  </Grid>
)

export default Test