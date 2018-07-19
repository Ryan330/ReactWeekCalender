import React, { Component } from 'react';
import Box from "./Box";
import Box2 from "./Box2";


function newBox(objBox) {
  return(<Box message={objBox}/>);
}

function newBox2(objBox) {
  return(<Box2 message={objBox}/>);
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDayArray: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      weekEndArray: ["Saturday", "Sunday"]
    };
}
  render() {
    return (
      <div className="boxContainer">
          {this.state.weekDayArray.map(newBox)}
          {this.state.weekEndArray.map(newBox2)}
      </div>
    );
  }
}

export default App;
