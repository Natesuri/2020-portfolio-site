import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'

export const Contact = () => {
  return (
    <React.Fragment>
      { formatPageCopy(COPY.CONTACT) }
    </React.Fragment>
  )
}
