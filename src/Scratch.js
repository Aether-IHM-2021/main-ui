import React from 'react'
import SecondaryButton from './components/atoms/SecondaryButton'

const Scratch = () => {
    return (
        <div style={{maxWidth: "480px", marginLeft: "auto", display: "flex", flexDirection: "vertical"}}>
            <h1>Hello world</h1>
            <SecondaryButton>Sample Button</SecondaryButton>
        </div>
    )
}

export default Scratch
