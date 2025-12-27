import React from 'react'

import ContactTile from './ContactTile';

const MainContent = (props) => {
    function lockScreen() {
        document.getElementById("root").style.overflow = "hidden";
        document.querySelector(".module").style.display = "flex";
    }
    return (
        <div className='mainContent'>
            <div className="contactTitle">
                <h2>My Contacts</h2>
                <button className='add' onClick={() => {
                    lockScreen()
                }}><i className="ri-add-large-fill"></i></button>
            </div>
            <div className="contacts">
                {
                    props.conInfo.map((el , idx) => {
                        return <ContactTile name={el.name} num={el.phone} url={el.imgUrl} key={idx}/>
                    })
                }
                
            </div>
        </div>

    )
}

export default MainContent