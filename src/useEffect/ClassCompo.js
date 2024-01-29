import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class simulateUseeffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      namee: "",
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
    if (prevState.count !== this.state.count) {
      // Condition --- topic .
      console.log("Action Made");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control mx-auto d-block w-50"
          value={this.state.namee}
          placeholder="Write to test "
          onChange={(e) => {
            this.setState({ namee: e.target.value });
          }}
        />
        <Button variant="primary" onClick={this.Change}>
          Cklick here
        </Button>
      </div>
    );
  }
}

export default simulateUseeffect;
