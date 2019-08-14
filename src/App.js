import React from "react";
import routes from "./routes";
import "styles/fonts.scss";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return routes;
  }
}
