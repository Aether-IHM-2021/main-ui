import styled from "styled-components";
import { COLOR } from "../../../constants/color.js"

const PrimaryButton = styled.button`
    background-color: ${COLOR.mainBlue[400]};
    border: 3px solid ${COLOR.mainBlue[400]};
    height: 3rem;
    min-width: 12em;
    padding: 0 3rem;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    border-radius: 65px;
    margin: auto auto;

    &:hover {
        border: 3px solid ${COLOR.mainBlue[300]};
        background-color: ${COLOR.mainBlue[300]};
        color: white;
        transition-duration: 0.3s;
    }
`;

export default PrimaryButton;
