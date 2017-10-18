import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import Recomendations from "./Recomendations"

const resultsList = [
  {
    id: 1,
    gamer: "Killer",
    description: "Killers get their kicks from imposing themselves on others. This may be 'nice', ie. busybody do-gooding, but few people practice such an approach because the rewards (a warm, cosy inner glow, apparently) aren't very substantial. Much more commonly, people attack other players with a view to killing off their personae (hence the name for this style of play). The more massive the distress caused, the greater the killer's joy at having caused it. Normal points-scoring is usually required so as to become powerful enough to begin causing havoc in earnest, and exploration of a kind is necessary to discover new and ingenious ways to kill people. Even socialising is sometimes worthwhile beyond taunting a recent victim, for example in finding out someone's playing habits, or discussing tactics with fellow killers. They're all just means to an end, though; only in the knowledge that a real person, somewhere, is very upset by what you've just done, yet can themselves do nothing about it, is there any true adrenalin-shooting, juicy fun.",
    imgUrl: "/img/user1.png"
  },
  {
    id: 2,
    gamer: "Achiever",
    description: "Achievers regard points-gathering and rising in levels as their main goal, and all is ultimately subserviant to this. Exploration is necessary only to find new sources of treasure, or improved ways of wringing points from it. Socialising is a relaxing method of discovering what other players know about the business of accumulating points, that their knowledge can be applied to the task of gaining riches. Killing is only necessary to eliminate rivals or people who get in the way, or to gain vast amounts of points (if points are awarded for killing other players).",
    imgUrl: "/img/user2.png"
  },
  {
    id: 2,
    gamer: "Explorer",
    description: "Explorers delight in having the game expose its internal machinations to them. They try progressively esoteric actions in wild, out-of-the-way places, looking for interesting features (ie. bugs) and figuring out how things work. Scoring points may be necessary to enter some next phase of exploration, but it's tedious, and anyone with half a brain can do it. Killing is quicker, and might be a constructive exercise in its own right, but it causes too much hassle in the long run if the deceased return to seek retribution. Socialising can be informative as a source of new ideas to try out, but most of what people say is irrelevant or old hat. The real fun comes only from discovery, and making the most complete set of maps in existence.",
    imgUrl: "/img/user3.png"
  },
  {
    id: 2,
    gamer: "Socialiser",
    description: "Socialisers are interested in people, and what they have to say. The game is merely a backdrop, a common ground where things happen to players. Inter-player relationships are important: empathising with people, sympathising, joking, entertaining, listening; even merely observing people play can be rewarding - seeing them grow as individuals, maturing over time. Some exploration may be necessary so as to understand what everyone else is talking about, and points-scoring could be required to gain access to neat communicative spells available only to higher levels (as well as to obtain a certain status in the community). Killing, however, is something only ever to be excused if it's a futile, impulsive act of revenge, perpetrated upon someone who has caused intolerable pain to a dear friend. The only ultimately fulfilling thing is not how to rise levels or kill hapless drips; it's getting to know people, to undertand them, and to form beautiful, lasting relationships.",
  imgUrl: "/img/user4.png"
  }
]

class Results extends Component {
  render() {
    const gamerClass = resultsList[0].gamer.toUpperCase()
    const gamerDescription = resultsList[0].description
    const imgUrl = resultsList[0].imgUrl
    console.log(gamerClass)
    return (
      <Grid>
        <Row>
          <Col sm={6} className="text-center">
            <Image src={imgUrl} alt="-" responsive />
            <h2>YOU ARE {gamerClass} GAMER</h2>
          </Col>
          <Col sm={6} className="text-center">
          {/* TODO --> gráfico jugador */}
          GRÁFICO JUGADOR
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h3>USER INFO</h3>
            <p>{gamerDescription}</p>
          </Col>
          <Col sm={6}>
            <Recomendations />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Results