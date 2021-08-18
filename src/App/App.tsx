import * as React from "react";
import { render } from "react-dom";
import "./App.css";

export default class App extends React.Component {
  state = {
    title: "TCC React Typescript Webpack Template"
  }

  render() {
    document.title = this.state.title;
    return <div>
      <h2>TCC React Typescript Webpack Template</h2>
      <p>This is a template for a web page using react</p>
    </div>
  }
}

render(<App />, document.getElementById("root"));
