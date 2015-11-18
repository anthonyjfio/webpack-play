import React from 'react'
import pkg from '../package.json'

export default class Version extends React.Component {

  render() {
    return (
      <div>
        <p><small>{pkg.version}</small></p>
      </div>
    )
  }
}

