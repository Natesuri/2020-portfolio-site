import React from 'react';
import './styles/formatting.scss'

export const formatPageCopy = (copyDictionary, isTextHeavy=false) => {
  return Object.entries(copyDictionary).map(([copyType, copyContent]) => {
    switch(copyType) {
      case 'HEADER':
        return formatHeaderCopy(copyType, copyContent)
      case 'MAIN':
        return formatMainCopy(copyType, copyContent, isTextHeavy)
      case 'LINK':
        return formatLinkList(copyType, copyContent)
      default:
        return null
    }
  })
}

const formatHeaderCopy = (copyType, headerCopy) => {
  return <h4 key={copyType} className='pageHeader'>{headerCopy}</h4>
}

const formatMainCopy = (copyType, copyContent, isTextHeavy) => {
  return copyContent.map((copySegment, index) => (
    <p key={copyType + index} className={isTextHeavy ? 'pageBody miniText': 'pageBody' }>{copySegment}</p>
  ))
}

const formatLinkList = (copyType, copyContent) => {
  return copyContent.map((linkDict, index) => (
    <p className='pageBody'><a key={copyType + index} href={linkDict.link}>{linkDict.text}</a></p>
  ))
}
