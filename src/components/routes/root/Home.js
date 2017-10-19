import React from 'react'
import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Home.css'

const Home = () => (
  <div className="Home">
    <Jumbotron>
      <Grid>
        <Row>
          <Col md={8} className="jumbotron-text">
            <h1>What kind of player are you?</h1>
            <p>Find your way for how you are!</p>
          </Col>
          <Col md={4}>
            <p className="callToAction">
              <LinkContainer to="/test">
                <Button bsStyle="primary" bsSize="large">Do the test!</Button>
              </LinkContainer>              
            </p>
          </Col>
        </Row>
      </Grid>    
    </Jumbotron>
    <Grid id="thumbnails-info">
      <Row>
        <Col sm={4} className="text-center">
          <Image src="img/command.png" responsive />
          <h3>Test it!</h3>
        </Col>
        <Col sm={4} className="text-center">
          <Image src="img/statistics.png" responsive />
          <h3>Discover your gamer personality</h3>
        </Col>
        <Col sm={4} className="text-center">
          <Image src="img/command-old.png" responsive />
          <h3>See your personal recomendation</h3>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Home