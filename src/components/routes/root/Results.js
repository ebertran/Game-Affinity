import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import Recomendations from "./Recomendations"
import gamersClassInfo from "../../../dataService/gamersClassInfo"

import './Results.css'


class Results extends Component {
  render() {
    const gamerClass = gamersClassInfo[0].gamer.toUpperCase()
    const gamerDescription = gamersClassInfo[0].description
    const imgUrl = gamersClassInfo[0].imgUrl
    const recomendationsIdList = ["14829", "14825"]
    return (
      <Grid className="results">
        <Row>
          <Col md={6} className="text-center user-info">         
            <Image src={imgUrl} alt={gamerClass} responsive/>
            <h2>YOU ARE {gamerClass} GAMER</h2>
          </Col>
          <Col md={6} className="text-center">
          {/* TODO --> gráfico jugador */}
          GRÁFICO JUGADOR
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <h3>How is a {gamersClassInfo[0].gamer} gamer?</h3>
            <p>{gamerDescription}</p>
          </Col>
          <Col md={6}>
            <div className="recomendations text-center">
          <h3>RECOMENDATIONS</h3>
          <Row>
            <Recomendations characterIdList={recomendationsIdList}/>        
          </Row>
        </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Results