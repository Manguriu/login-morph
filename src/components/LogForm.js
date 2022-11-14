import React from 'react';
import './log.css';
import { useState } from "react";

const LogForm = () => {

    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup ("popup-Log")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return(
        <div className='card'>
            <div></div>
            <h1> Login Form </h1>
            <input type='text' placeholder='Enter Username'></input>
            <input type='password' placeholder='Password'></input>
        
            <button className='btn-Log' onClick={popup}>Login</button>
            <p className='text'> continue with</p>

            <div className='a-log'>
                    <div className='fb'>
                    </div>
                    <div className='google'>
                    </div>
            </div>

            <div className={popupStyle}>
                <h3> Failed login </h3>
                <p> Enter correct credentials</p>
            </div>
        
        </div>
    )
}

export default LogForm;