import React, { Component } from 'react'
import { Popover, OverlayTrigger, Image, Col } from 'react-bootstrap'

import charactersService from '../../../services/characters'

import './Recomendations.css'


class Recomendations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character1: [],
      imageUrl1: [],
      character2: [],
      imageUrl2: []
    }
  }
  componentWillMount(){
    const characterIdList = this.props.characterIdList

    charactersService.getCharacterInfo(characterIdList[0])
      .then( character => {
        this.setState({ 
          character1: character.data.results[0],
          imageUrl1: character.data.results[0].image
        })
        return charactersService.getCharacterInfo(characterIdList[1])
      })
      .then( character => {
        this.setState({ 
          character2: character.data.results[0],
          imageUrl2: character.data.results[0].image
        })
      })
      .catch(function(error) {
        console.error(error)
      })
  }

  render() {
    const characterName1 = this.state.character1.name
    const characterDeck1 = this.state.character1.deck
    const imageSrc1 = this.state.imageUrl1.icon_url
    const imageSrc1Medium = this.state.imageUrl1.medium_url
    const characterName2 = this.state.character2.name
    const characterDeck2 = this.state.character2.deck
    const imageSrc2 = this.state.imageUrl2.icon_url
    const imageSrc2Medium = this.state.imageUrl2.medium_url

    const popoverHoverFocus1 = (
      <Popover id="popover-trigger-click" title={characterName1}>
        <Image src={imageSrc1Medium} responsive/>
      </Popover>
    );
    const popoverHoverFocus2 = (
      <Popover id="popover-trigger-click" title={characterName2}>
        <Image src={imageSrc2Medium} responsive/>
      </Popover>
    );

    return (
      <div>
        <Col sm={6}>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popoverHoverFocus1}>
            <div className="recomendations_popInfo text-center well">
              <h3>League of Legends</h3>
              <Image src={imageSrc1} circle/>
              <h4>{characterName1}</h4>
              <p>{characterDeck1}</p>
            </div>
         </OverlayTrigger> 
        </Col>
        <Col sm={6}>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popoverHoverFocus2}>
            <div className="recomendations_popInfo text-center well">
              <h3>Overwatch</h3>
              <Image src={imageSrc2} circle/>
              <h4>{characterName2}</h4>
              <p>{characterDeck2}</p>
            </div>
         </OverlayTrigger> 
        </Col>
      </div>       
    )
  }
}

export default Recomendations