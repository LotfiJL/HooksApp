import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class simulateUseeffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  Change = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.Change}>
          Cklick here
        </Button>
      </div>
    );
  }
}

export default simulateUseeffect;
