import React from 'react'

import pkg from '../package.json'

import Footer from './Footer.jsx'
import Version from './Version.jsx'

export default class App extends React.Component {

  render() {
    return (
      <div className="mx-auto p1 max-width bg-color txt-color">
        <h1>{pkg.author.name}</h1>
        <p>I am a student at Macomb Community College currently pusuing a degree in Business Managment. In my free time I like to teach myself to code.</p>
        <Footer />
        <Version />
      </div>
    )
  }
}
