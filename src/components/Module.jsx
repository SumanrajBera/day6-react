import React, { useState } from 'react'


const Module = (props) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    function lockScreen(e) {
        e.preventDefault();
        document.getElementById("root").style.overflow = "auto";
        document.querySelector(".module").style.display = "none";

        if (name.trim() === "" || phone.trim() === "") return
        else {
            const finalImgUrl = isValidUrl(imgUrl) ? imgUrl : "https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg";
            const newDets = {
                name, phone, imgUrl: finalImgUrl
            }
            props.fn(prev => [newDets, ...prev]);
        }

        setName("");
        setPhone("");
        setImgUrl("");
    }


    function closefn() {
        document.getElementById("root").style.overflow = "auto";
        document.querySelector(".module").style.display = "none";
    }

    return (
        <div className="module">
            <button className='close' onClick={() => { closefn() }}><i className="ri-close-large-line"></i></button>
            <div className='formGrp'>
                <form onSubmit={(e) => {
                    lockScreen(e)
                }} >
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" id='name' placeholder='Ex. Harrison Wells' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <label htmlFor="num">Enter Number</label>
                    <input type="text" id='num' placeholder='Ex. +91-XXXX-XX-XXXX' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    <label htmlFor="num">Enter Image url</label>
                    <input type="text" id='num' placeholder='Ex. https://img.jpg' value={imgUrl} onChange={(e) => { setImgUrl(e.target.value) }} />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Module