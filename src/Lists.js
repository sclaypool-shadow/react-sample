import React from "react";
import { Person } from "./Basic";

function Lists(props) {
  let people = [
    { name: "john", age: 10 },
    { name: "alex", age: 21 },
    { name: "samantha", age: 55 },
  ];

  let renderedPeople = people.map((person) => (
    <li>
      <Person key={person.name} {...person} />
    </li>
  ));

  return <ul>{renderedPeople}</ul>;
}

export { Lists };
