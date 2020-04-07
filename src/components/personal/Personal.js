import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'

export const Personal = () => {
  return (
    <React.Fragment>
      { formatPageCopy(COPY.PERSONAL) }
    </React.Fragment>
  )
}
