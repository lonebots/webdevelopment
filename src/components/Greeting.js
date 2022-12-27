import React from "react";

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;
    if (hour % 12 < 12) timeOfDay = "Morning";
    else if (hour % 12 > 12 && hour % 12 < 17) timeOfDay = "Afternoon";
    else timeOfDay = "Night";

    return <p>Good {timeOfDay}!</p>;
  }
}
export default Greeting;
