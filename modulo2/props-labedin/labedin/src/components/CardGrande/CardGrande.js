import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <a target="_blank" href='https://www.youtube.com/watch?v=jPgPIIg3CUs'> { props.link }</a>
            </div>
        </div>
    )
}

export default CardGrande;