import React from 'react'

function Welcome({ name, children }) {
    return (
        <>
            <h1>مرحبا {name}</h1>
            {children}
        </>
    )
}
export default Welcome
