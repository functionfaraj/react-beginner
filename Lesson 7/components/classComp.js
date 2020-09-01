import React, { Component } from 'react'

class ClassComp extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <>
                <h1>Counter : {this.state.counter}</h1>
                <button
                    onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Increase
                </button>
            </>
        )
    }
}

export default ClassComp