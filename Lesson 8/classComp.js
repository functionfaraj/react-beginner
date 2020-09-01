import React, { Component } from 'react'

class ClassComp extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increase() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }), () => console.log(this.state.counter))
    }
    render() {
        return (
            <>
                <h1>Counter : {this.state.counter}</h1>
                <button
                    onClick={() => this.increase()}>
                    Increase
                </button>
            </>
        )
    }
}

export default ClassComp