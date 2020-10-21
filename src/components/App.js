import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({ buttonClicked: !this.state.buttonClicked })
          }
        ></button>
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
