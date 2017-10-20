import React from 'react'
import { Radar, defaults } from 'react-chartjs-2'


defaults.global.defaultFontColor = '#FFFFFF'
defaults.global.defaultFontSize = 25
defaults.global.defaultFontFamily = 'sans-serif'
defaults.global.animation.duration = 5000



export default class RadarChart extends React.Component {
  render() {
    const { k, e, a, s } = this.props.test
    const data = {
      labels: [ 'Killer', 'Achiever', 'Explorer', 'Socialiser' ],
      datasets: [
        {
          backgroundColor: 'rgba(223,105,26,0.4)',
          borderColor: 'rgba(223,105,26,1)',
          pointBackgroundColor: 'rgba(223,105,26,1)',
          pointBorderColor: '#ddd',
          pointHoverBackgroundColor: '#ddd',
          pointHoverBorderColor: 'rgba(223,105,26,1)',
          data: [ k, e, a, s ],
          pointBorderWidth: 1,
          pointLabelFontSize: 30
        }
      ]
    }
    return (
      <div>
        <Radar data={data} width={ 1 }
          height={ 1 }  options={{
            scale : {
              ticks: {
                scaleFontSize : 50,
                display : false
              }
            },
            legend : {
            display: false
            
           }}}/>
      </div>
    )
  }
}