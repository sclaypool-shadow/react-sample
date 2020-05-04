import React from "react";


function Stateful() {
    return <div>
        <BadAnimal/>
        <AnimalLoader/>
    </div>
}


class BadAnimal extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'loading...'
        }
    }

    async componentDidMount() {
        await sleep(2000)
        // fetch data from the server...
        this.setState ({
            name: 'horse'
        })
    }

    render() {
        return <p>animal is {this.state.name}</p>
    }
}

let Animal = (props) => <p>animal is {props.name}</p>

class AnimalLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'loading...'
        }
    }

    async componentDidMount() {
        await sleep(5000)
        // fetch data from the server...
        this.setState ({
            name: 'horse'
        })
    }

    render() {
        return <Animal name={this.state.name}/>
    }
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

export { Stateful }