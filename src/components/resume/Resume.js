import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy, getResume } from '../../utils'

export const Resume = () => {
  return(
    <React.Fragment>
      { formatPageCopy(COPY.RESUME) }
      { getResume() }
    </React.Fragment>
  )
}
