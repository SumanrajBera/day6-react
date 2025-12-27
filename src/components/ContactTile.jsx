import React from 'react'

const ContactTile = (props) => {
    return (
        <div className="contactTile">
            <img src={props.url} alt="" />
            <div className="info">
                <p className='contactName'>{props.name}</p>
                <p>+91-{props.num}</p>
            </div>
        </div>
    )
}

export default ContactTile