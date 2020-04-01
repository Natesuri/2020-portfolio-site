import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'

export const HomePage = () => {
  return(
    <React.Fragment>
      { formatPageCopy(COPY.HOME) }
    </React.Fragment>
  )
}
