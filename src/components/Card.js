import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <div className="CardLeft">
            <img alt="" src={props.image} />
        </div>
        <div className="CardRight">
            <h3>{props.title}</h3>
            <h4>@{props.type}</h4>
            <p>{props.text}</p>
            <h5>{props.tags.map(tag=>tag + '  ')}</h5>
        </div>
    </div>
)

export default Card