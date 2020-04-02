import React from 'react'

export const DetailBlock = props => (
  <div className='blockContent' onMouseEnter={ () => props.handleSetDetails(props.detailName)} onMouseLeave={props.handleRemoveDetails}>
    <p>{props.detailName}</p>
  </div>
)
