import React from "react";
function Person(props) {
  return <p> Name: {props.name} Age: {props.age} </p>;
}

function Class() {
  let john = { name: "john", age: 10 };
  return <PersonClass {...john} />;
}

class PersonClass extends React.Component {
  render() {
    return <p> Name: {this.props.name} Age: {this.props.age} </p>;
  }
}







export { Class, PersonClass }
