import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class LotfiClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ margin: "20px", backgroundColor: "yellow" }}>
          Count : {this.state.count}{" "}
        </h1>
        <Button onClick={this.handleClick}>Click here</Button>
      </div>
    );
  }
}

export default LotfiClass;
