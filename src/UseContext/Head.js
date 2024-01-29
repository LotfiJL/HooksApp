import React, { Component } from "react";
import First from "./First";
import { FirstDetail, SecondDetails } from "./contextUSE";
class Head extends Component {
  state = {
    namee: {
      jelo: "Lotfi",
      other: "EMP1RE",
    },
  };

  render() {
    return (
      <div>
        <FirstDetail.Provider value={this.state.namee}>
          <SecondDetails.Provider value={"red"}>
            <First />
          </SecondDetails.Provider>
        </FirstDetail.Provider>
      </div>
    );
  }
}
export default Head;
