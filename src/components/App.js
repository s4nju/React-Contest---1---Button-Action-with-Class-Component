import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  handleClick() {
    console.log("Clicked");
    this.setState({ buttonClicked: false });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick()}></button>
        {this.state.buttonClicked ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
