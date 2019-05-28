import React from 'react'
import './CardQuote.css'

const CardQuote = props => (
    <div className="CardQuote">
        <h2>“</h2>
        <h3>{props.quote}</h3>
        <h1>”</h1>
        <h6>{props.author}</h6>
        <h5>{props.book}</h5>
    </div>
)

export default CardQuote