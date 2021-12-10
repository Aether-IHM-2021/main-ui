import React from 'react'
import Text from "./atoms/Text/index.jsx";
import { useState } from 'react';
import { ProgressBar, Badge } from 'react-bootstrap';
import { COLOR } from '../constants/color.js';
import { BsStar, BsStarFill } from 'react-icons/bs';

const CardPosts = ({topic, agreeCount, disagreeCount, title, name, date, description, starCount, category, imageSrc, link}) => {

    const totalCount = agreeCount+disagreeCount
    const votePercentage = agreeCount/(totalCount)*100

    const containerStyle = {
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxSizing: "border-box",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
    }
    const imgContainerStyle = {
        background: "#E2E8F0",
        border: "1px solid #E2E8F0",
        boxSizing: "border-box",
        borderRadius: "8px",
        width:"36%",
    }
    const flexRowStyle = {display: "flex", justifyContent: "space-between", gap: "0.5em"}

    return (
        <div style={containerStyle}>
            <div style={imgContainerStyle}></div>
            <div style={{display:"flex", flexDirection:"column", width:"60%", gap: "0.5em",}}>
                <Text variant="title" style={{color:`${COLOR.gray[700]}`}}>{title}</Text>
                <Text variant="tag" style={{color:`${COLOR.gray[500]}`}}>{name} <strong>·</strong> {date}</Text>
                <Text variant="body2" style={{color:`${COLOR.gray[600]}`}}>{description}</Text>
                {topic==='proposal'?
                <>
                    <ProgressBar now={votePercentage} style={{height:"12px"}} label={`${58}%`} visuallyHidden />
                    <div style={flexRowStyle}>
                    <Text variant="tag" style={{color:`${COLOR.gray[600]}`}}><strong>{agreeCount}</strong> out of {totalCount} citizens agree</Text>
                    <div style={flexRowStyle}><Text variant="tag" style={{color:`${COLOR.gray[600]}`}}>{starCount}</Text><BsStar size="1em" color={COLOR.gray[600]}/></div>
                    </div>
                </>
                : null}
                {topic==='concern'?
                <>
                    <div style={flexRowStyle}>
                    <Badge bg="danger">Citizen Concern</Badge>
                    <div style={flexRowStyle}><Text variant="tag" style={{color:`${COLOR.gray[600]}`}}>{starCount}</Text><BsStar size="1em" color={COLOR.gray[600]}/></div>
                    </div>
                </>
                : null}
                {topic==='news'?
                <>
                    <div style={flexRowStyle}>
                    <Badge bg="primary">Announcements</Badge>
                    <div style={flexRowStyle}><Text variant="tag" style={{color:`${COLOR.gray[600]}`}}>{starCount}</Text><BsStar size="1em" color={COLOR.gray[600]}/></div>
                    </div>
                </>
                : null}
        
            </div>

        </div>
    )
}

export default CardPosts
