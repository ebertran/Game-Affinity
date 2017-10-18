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
    console.log(characterIdList[0])
    console.log(characterIdList[1])

    charactersService.getCharacterInfo(characterIdList[0])
      .then( character => {
        console.log('character-1', character)
        this.setState({ 
          character1: character.data.results[0],
          imageUrl1: character.data.results[0].image
        })
        return charactersService.getCharacterInfo(characterIdList[1])
      })
      .then( character => {
        console.log('character-2', character)
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
    const imageSrc1 = this.state.imageUrl1.icon_url
    const characterName2 = this.state.character2.name
    const imageSrc2 = this.state.imageUrl2.icon_url

    const popoverHoverFocus1 = (
      <Popover id="popover-trigger-hover-focus" title="More info">
        About the character.
      </Popover>
    );
    const popoverHoverFocus2 = (
      <Popover id="popover-trigger-hover-focus" title="More info">
        About the character.
      </Popover>
    );

    return (
      <div>
        <Col xs={6}>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus1}>
            <div className="recomendations_popInfo text-center">
              <Image src={imageSrc1} circle/>
              <h4>{characterName1}</h4>
            </div>
         </OverlayTrigger> 
        </Col>
        <Col xs={6}>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus2}>
            <div className="recomendations_popInfo text-center">
              <Image src={imageSrc2} circle/>
              <h4>{characterName2}</h4>
            </div>
         </OverlayTrigger> 
        </Col>
      </div>       
    )
  }
}

export default Recomendations