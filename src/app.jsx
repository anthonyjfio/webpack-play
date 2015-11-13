import './main.css'
import React from 'react'

export default class App extends React.Component {

  render() {
    const styles = {
      root: {
        padding: 32
      }
    }
  
    return (
      <div style={styles.root}>
        <h1>Hello world</h1>
        <p>This is my first attempt at configuring webpack and react together</p>
      </div>
    )
  }
}
