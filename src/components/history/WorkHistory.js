import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'

export const WorkHistory = () => {
  return(
    <React.Fragment>
      { formatPageCopy(COPY.HISTORY) }
    </React.Fragment>
  )
}
