import React from "react";
function Person(props) {
  return <p> Name: {props.name} Age: {props.age} </p>;
}

function Basic() {
  let john = { name: "john", age: 10 };
  return <Person {...john} />;
}




export { Basic, Person };
