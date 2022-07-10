import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin: auto;
    padding: 10px;
`

const CardUser = (props) => {
    return (
        <CardContainer>Aqui ficara as infos das pessoas</CardContainer>
    )
}

export default CardUser;