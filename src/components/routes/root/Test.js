import React from 'react'
import { Grid, Button, Col, ProgressBar } from 'react-bootstrap'

import './Test.css'

const Test = () => (
  <Grid>
    <div className="question-block">
      <p className="lead">Are you more comfortable, as a player in an online game:</p>
      <hr/>
      <Col sm={6} smOffset={3}>
        <Button bsStyle="primary" bsSize="large" block>Talking with friends in a tavern</Button>
        <Button bsStyle="primary" bsSize="large" block>Out hunting orcs by yourself for experience?</Button>
      </Col>
      <ProgressBar active now={45} />
    </div>
  </Grid>
)

export default Test