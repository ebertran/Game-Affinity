import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import Recomendations from "./Recomendations"
import gamersClassInfo from "../../../dataService/gamersClassInfo"
import GetIdChar from "../../../utils/utils"

import './Results.css'

class Results extends Component {
  render() {
    const testResult = this.props.answers
    const recomendationsIdList = GetIdChar(testResult)
    const gamerProfileId = recomendationsIdList[2]
    const gamerProfileIndex = gamersClassInfo.findIndex( item =>
      item.id === gamerProfileId)
    const gamerClass = gamersClassInfo[gamerProfileIndex].gamer.toUpperCase()
    const gamerDescription = gamersClassInfo[gamerProfileIndex].description
    const imgUrl = gamersClassInfo[gamerProfileIndex].imgUrl
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
            <h3>How is a {gamersClassInfo[gamerProfileIndex].gamer} gamer?</h3>
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