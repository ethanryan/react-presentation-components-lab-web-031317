import React from 'react'

const defaultMood = "happy"

class DumbComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: defaultMood
    }
  } //end constructor

  // gotClicked() {
  //   console.log('gotClicked called');
  // }

  makeSad() {
    console.log('makeSad called');
    this.setState({
      mood: "sad"
    })
  }

  render() {
    console.log('DumbComponent');

    // return (
    //   <div onClick={this.gotClicked.bind(this)}>
    //     {this.state.mood}</div>
    // )

    return (
      <div onClick={this.makeSad.bind(this)}>
        {this.state.mood}</div>
    )

  } //end render
} //end class

export default DumbComponent
