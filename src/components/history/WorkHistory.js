import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'
import { TenureTimer } from './TenureTimer'

const generateTenureTimers = events => {
  return events.map((lifeEvent, index) => {
    return <TenureTimer key={lifeEvent + index} pointInTime={lifeEvent.eventDate} eventName={lifeEvent.eventTitle}/>
  })
}

export const WorkHistory = () => {
  return(
    <div className='workHistoryContentContainer'>
      { formatPageCopy(COPY.HISTORY, true) }
      <div className='workBlockContainer'>
        { generateTenureTimers(COPY.HISTORY.EVENTS) }
      </div>
    </div>
  )
}
