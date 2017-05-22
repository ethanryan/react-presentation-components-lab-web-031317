import React from 'react'

// var gotClicked = () => {
//   console.log('gotClicked called');
// }

// var handleClick = () => {
//   console.log('handle click got clicked');
// }

var DumberComponent = (props) => {
  console.log('DumberComponent');
  return (
    <div
      // onClick={this.gotClicked.bind(this)}>
      // onClick={this.props.dumberer}>
      onClick={props.handleClick}>
      I am just happy</div>
  )

  // return (
  //   <div onClick={undefined}>I am just happy</div>
  // )
} //end DumberComponent

export default DumberComponent
