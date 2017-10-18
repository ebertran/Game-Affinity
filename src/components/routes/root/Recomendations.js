import React, { Component } from 'react'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

import './Recomendations.css'




class Recomendations extends Component {
  render() {
    const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title="More info">
      About the character.
    </Popover>
  );
    return (
      <div className="recomendations">
          <h3>Recomendations</h3>
          <ol>
            <li>
              <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus}>
                <h4>Character name</h4>
              </OverlayTrigger>        
            </li>
          </ol>
        </div>
    )
  }
}

export default Recomendations