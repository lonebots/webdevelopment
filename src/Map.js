import React from "react";
import Header from "./components/Heading";
import Greeting from "./components/Greeting";

export default class Map extends React.Component {
  render() {
    return (
      <div>
        <Header username="jishnu" />
        <Greeting />
      </div>
    );
  }
}
