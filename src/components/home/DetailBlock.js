import React from 'react'

export const DetailBlock = props => (
  <div className={props.activeBlock === props.detailName ? "blockContent active" : "blockContent"} onMouseEnter={ () => props.handleSetDetails(props.detailName)}>
    <p>{props.detailName}</p>
  </div>
)
