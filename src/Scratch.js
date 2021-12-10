import React from 'react'
import PrimaryButton from './components/atoms/PrimaryButton'
import SecondaryButton from './components/atoms/SecondaryButton'
import CardPosts from './components/CardPosts'

const Scratch = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <PrimaryButton>yow</PrimaryButton>
            <SecondaryButton>Sample Button</SecondaryButton>
            <CardPosts/>
        </div>
    )
}

export default Scratch;
