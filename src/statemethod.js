import React, { Component } from "react";
export default class statemethod extends Component {
  constructor() {
    super();
    this.state = { hih: "yes" };
  }
  render() {
    return (
      <div>
        <p>hihih{this.state.hih}</p>
      </div>
    );
  }
}
