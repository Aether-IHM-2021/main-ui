import React from 'react'
import Text from "./atoms/Text/index.jsx";

const CardPosts = () => {
    const containerStyle = {
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxSizing: "border-box",
        borderRadius: "10px",
        display: "flex",
    }
    return (
        <div style={containerStyle}>
            <div>IMG</div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <Text variant="title">Title here</Text>
                <Text variant="tag">Title here</Text>
                <Text variant="body2">Title here</Text>
                <Text variant="tag">Title here</Text>
            </div>

        </div>
    )
}

export default CardPosts
