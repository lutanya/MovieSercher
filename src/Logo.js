import React from "react";

class Logo extends React.PureComponent {
  render() {
    return React.createElement(
      "div",
      { className: "logo" },
      React.createElement("b", null, "netflix"),
      "roulette"
    );
  }
}

export default Logo;
