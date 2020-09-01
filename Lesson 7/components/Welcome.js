import React from 'react'

function Welcome(props) {
    console.log(props)
    return (
        <>
            <h1>مرحبا {props.name}</h1>
            {props.children}
        </>
    )
}
export default Welcome
