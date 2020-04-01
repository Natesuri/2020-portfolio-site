import React from 'react';
import './styles/formatting.scss'

export const formatPageCopy = copyDictionary => {
  return Object.entries(copyDictionary).map(([copyType, copyContent]) => {
    switch(copyType) {
      case 'FIRST':
        return formatHeaderCopy(copyContent)
      case 'MAIN':
        return formatMainCopy(copyContent)
      default:
        return null
    }
  })
}

const formatHeaderCopy = headerCopy => {
  return <h4 className='pageHeader'>{headerCopy}</h4>
}

const formatMainCopy = copyArray => {
  return copyArray.map(copySegment => (
    <p className='pageBody'>{copySegment}</p>
  ))
}
