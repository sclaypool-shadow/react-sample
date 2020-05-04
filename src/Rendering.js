import React from "react";


class Rendering extends React.Component {
    constructor() {
        super();
        this.state = {
            children: 0
        }
    }

    componentDidMount() {
        console.log("'Parent' mounted");
    }

    componentDidUpdate() {
        console.log("'Parent' updated");
    }

    addChild = () => {
        this.setState({ children: this.state.children + 1 })
    }

    
    render() {
        let children = []
        for (var i = 0; i < this.state.children; i++) {
            children.push(<ChildComponent key={i} idx={i}/>)
        }
        console.log('rendering parent')
        return <div>
            <p>Parent</p>
            {children}
            <button onClick={this.addChild}>AddChild</button>
        </div>
    }
}

class ChildComponent extends React.Component {
    componentDidMount() {
        console.log(`'Child ${this.props.idx}' mounted`);
    }

    component() {
        console.log(`'Child ${this.props.idx}' updated`);
    }

    render() {
        console.log('rendering child ' + this.props.idx)
        return <p>{this.props.idx}</p>
    }
}


export {Rendering};