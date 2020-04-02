import React from 'react';
import './styles/formatting.scss'

export const formatPageCopy = copyDictionary => {
  return Object.entries(copyDictionary).map(([copyType, copyContent]) => {
    switch(copyType) {
      case 'HEADER':
        return formatHeaderCopy(copyType, copyContent)
      case 'MAIN':
        return formatMainCopy(copyType, copyContent)
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

const formatMainCopy = (copyType, copyContent) => {
  return copyContent.map((copySegment, index) => (
    <p key={copyType + index} className='pageBody'>{copySegment}</p>
  ))
}

const formatLinkList = (copyType, copyContent) => {
  return copyContent.map((linkDict, index) => (
    <p className='pageBody'><a key={copyType + index} href={linkDict.link}>{linkDict.text}</a></p>
  ))
}

export const getResume = () => (
  <p className='pageBody'>
    <a href="Nate_Suri_Software_Engineer_2020.pdf" download>Click Here!</a>
  </p>
)
