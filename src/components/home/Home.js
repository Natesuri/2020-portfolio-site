import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'
import '../../styles/formatting.scss'

export class HomePage extends React.Component {

  state = {
    isDisplayingDetails: false,
    hoveredAttribute: ''
  };

  createBlurb = attribute => {
    this.setState(
      {
        isDisplayingDetails: true,
        hoveredAttribute: attribute
      }
    )
    console.log(this.state)
  }

  removeBlurb = () => {
    this.setState(
      {
        isDisplayingDetails: false,
        hoveredAttribute: ''
      }
    )
    console.log(this.state)
  }

  getDetails = hoveredAttribute => {

    const copyDetailsArray = COPY.HOME.DETAILS[hoveredAttribute]

    return (
      copyDetailsArray.map((detail, index) => {
        return <p key={detail + index} >{detail}</p>
      } )

    )
  }

  render() {
    return (
      <React.Fragment>
        { formatPageCopy(COPY.HOME) }
        <div className='homeBlockContainer'>
          <div className='blockContent' onMouseEnter={ () => this.createBlurb('storyteller')} onMouseLeave={this.removeBlurb}>
            <p>Storyteller</p>
          </div>
          <div className='blockContent' onMouseEnter={() => this.createBlurb('teamPlayer')} onMouseLeave={this.removeBlurb}>
            <p>Team Player</p>
          </div>
          <div className='blockContent' onMouseEnter={() => this.createBlurb('innovator')} onMouseLeave={this.removeBlurb}>
            <p>Innovator</p>
          </div>
        </div>
        {this.state.isDisplayingDetails && (
          <div className='homeDetailsContainer'>
            {this.getDetails(this.state.hoveredAttribute)}
          </div>
        )}
      </React.Fragment>
    )
  }

}
