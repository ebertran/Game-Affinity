import React from 'react'
import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap'

import './Home.css'

const Home = () => (
  <div className="Home">
    <Jumbotron>
      <Grid>
        <Row>
          <Col sm={8} >
            <h1>What kind of player are you?</h1>
            <p>Find your way for how you are!</p>
          </Col>
          <Col sm={4}>
            <p className="callToAction"><Button bsStyle="primary" bsSize="large">Do the test!</Button></p>
          </Col>
        </Row>
      </Grid>    
    </Jumbotron>
    <Grid id="thumbnails-info">
      <Row>
        <Col sm={4} className="text-center">
          <a href="#">
            <Image src="img/command.png" responsive />
          </a>
            <h3>Test it!</h3>
            <p>The most amazing test for new gamers.</p>
        </Col>
        <Col sm={4} className="text-center">
          <a href="#">
            <Image src="img/statistics.png" responsive />
          </a>
            <h3>Discover your gamer personality</h3>
            <p>The most amazing test for new gamers.</p>
        </Col>
        <Col sm={4} className="text-center">
          <a href="#">
            <Image src="img/101.png" responsive />
          </a>
            <h3>See your personal recomendation</h3>
            <p>The most amazing test for new gamers.</p>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Home