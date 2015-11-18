import React from 'react'

import pkg from '../package.json'

export default class Footer extends React.Component {

  render() {
    return (
      <div>
        <a className="pr1 tt-upper" href="mailto:anthony@anthonyfiorani.com">email</a>
        <a className="ml1 pl1 pr1 tt-upper" href="https://github.com/anthonyfio">github</a>
        <a className="ml1 pl1 pr1 tt-upper" href="#">writing</a>
      </div>
    )
  }
}

