import React from 'react'

import Description from './Description.jsx'
import Footer from './Footer.jsx'
import Version from './Version.jsx'

export default class App extends React.Component {

  render() {
    return (
      <div
      className="
      mx-auto
      p2
      pr4-m
      pr5-l
      max-width
      bg-color
      txt-color">
        <h3 className="tt-upper">Anthony Fiorani</h3>
        <Description />
        <Footer />
        <Version />
      </div>
    )
  }
}
