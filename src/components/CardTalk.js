import React from 'react'
import './CardTalk.css'

const CardTalk = props => (
    <div className="CardTalk">
        <div className="CardTalkRight">
            <h3><a target="_blank" href={props.url}>{props.title}</a></h3>
            <h5>Organized By {props.org}</h5>
            <h6>{props.date}</h6>
            <h4>@{props.loc}</h4>
            <p>{props.text}</p>
        </div>
        <div className="CardTalkLeft">
            <a target="_blank" href={props.url2}><img alt="" src={props.image} /></a>
        </div>
    </div>
)

export default CardTalk