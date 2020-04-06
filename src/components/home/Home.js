import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'
import { DetailBlock } from './DetailBlock'

export class HomePage extends React.Component {

  state = {
    isDisplayingDetails: true,
    hoveredAttribute: "Storyteller"
  };

  handleSetDetails = attribute => {
    this.setState(
      {
        isDisplayingDetails: true,
        hoveredAttribute: attribute
      }
    )
  }

  handleGetDetails = hoveredAttribute => {
    const copyDetailsArray = COPY.HOME.DETAILS[hoveredAttribute]

    return (
      copyDetailsArray.map((detail, index) => {
        return <p key={detail + index} >{detail}</p>
      } )

    )
  }

  generateDetailsBlocks = detailsDictionary => (
    Object.keys(detailsDictionary).map((detailKey, index) => (
      <DetailBlock key={detailKey} handleSetDetails={this.handleSetDetails} detailName={detailKey} activeBlock={this.state.hoveredAttribute}/>
    ))
  )

  render() {
    return (
      <React.Fragment>
        { formatPageCopy(COPY.HOME) }
        <div className='homeBlockAndDetailsContainer'>
          <div className='homeBlockContainer'>
            {this.generateDetailsBlocks(COPY.HOME.DETAILS)}
          </div>
          {
            this.state.isDisplayingDetails && (
              <div className='homeDetailsContainer'>
                {this.handleGetDetails(this.state.hoveredAttribute)}
              </div>
            )
          }
        </div>
      </React.Fragment>
    )
  }

}
