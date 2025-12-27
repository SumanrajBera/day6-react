import React from 'react'

import Camera from './Camera'


const TitleGrp = () => {
    return (
        <div className="titleGrp">
            <div className="left">
                <Camera />
                <p>15:45</p>
            </div>

            <div className="right">
                <div className="icons">
                    <i className="ri-bluetooth-connect-line"></i>
                    <i className="ri-wifi-line"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className='signal'>
                        <path d="M2 3H4V21H2V3Z"></path>
                        <path d="M8 6H10V21H8V6Z"></path>
                        <path d="M14 9H16V21H14V9Z"></path>
                        <path d="M20 12H22V21H20V12Z"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='red'><path d="M4 7V17H18V7H4ZM3 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM5 8H9V16H5V8ZM21 9H23V15H21V9Z"></path></svg>
                </div>
            </div>

        </div>
    )
}

export default TitleGrp