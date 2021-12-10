import React from 'react'
import RoundButton from './components/atoms/PrimaryButton'

const Scratch = () => {
    return (
        <div style={{maxWidth: "480px", marginLeft: "auto", display: "flex", flexDirection: "vertical"}}>
            <h1>Hello world</h1>
            <RoundButton>Sample Button</RoundButton>
        </div>
    )
}

export default Scratch
