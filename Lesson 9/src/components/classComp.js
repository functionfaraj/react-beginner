import React, { Component } from 'react'
import Welcome from './Welcome'

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
        const { name, age } = this.props
        const { counter } = this.state
        return (
            <>
                <h1>Welocme {name}</h1>
                <h1>Counter : {counter}</h1>
                <button
                    onClick={() => this.increase()}>
                    Increase
                </button>
                <h2>{name} you clicked {counter} times</h2>
            </>
        )
    }
}

export default ClassComp