import React from 'react'
import { COPY } from '../../constants/constants'
import { formatPageCopy } from '../../utils'
export class HomePage extends React.Component {

  state = {
  };

  render() {
    return (
      <React.Fragment>
        { formatPageCopy(COPY.HOME) }
      </React.Fragment>
    )
  }

}
