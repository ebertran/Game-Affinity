import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const Results = () => (
  <Grid>
    <Row>
      <Col sm={6} className="text-center">
        <Image src="img/user1.png" alt="-" responsive />
        <h2>YOU ARE KILLER GAMER</h2>
      </Col>
      <Col sm={6} className="text-center">
      {/* TODO --> gráfico jugador */}
      </Col>
    </Row>
    <Row>
    <Col sm={6}>
      <h3>USER INFO</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sapiente accusantium at, neque eligendi ducimus nulla. Placeat voluptatem repellendus delectus omnis esse odit qui a deserunt, pariatur eveniet labore ex.</p>
    </Col>
    <h3>RECOMENDATIONS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sapiente accusantium at, neque eligendi ducimus nulla. Placeat voluptatem repellendus delectus omnis esse odit qui a deserunt, pariatur eveniet labore ex.</p>
    </Row>
  </Grid>
)

export default Results