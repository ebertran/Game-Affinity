import React from 'react'
import { Jumbotron, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'

import './Home.css'

const Home = () => (
  <div className="Home">
    <Jumbotron>
      <Grid>
        <Row>
          <Col sm={8}>
            <h1>Hello, world!</h1>
            <p>Contents...</p>
          </Col>
          <Col sm={4}>
            <p><Button bsStyle="primary" bsSize="large">Do the test!</Button></p>
          </Col>
        </Row>
      </Grid>    
    </Jumbotron>
    <Grid>
      <Row>
        <Col sm={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col sm={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Home