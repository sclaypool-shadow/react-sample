import React, { useState } from "react";
import { Person } from "./Basic";

function Reactive() {
  let [name, setName] = useState("");
  return (
    <div>
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <Person2 name={name} />
    </div>
  );
}

class ReactiveClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onInput={(e) => this.setState({ name: e.target.value })}
        />
        <Person2 name={this.state.name} age={0} />
      </div>
    );
  }
}

let Person2 = (props) => (
  <p>
    <strong>Name</strong> {props.name}
  </p>
);

export { Reactive };
