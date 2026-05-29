import React from 'react'
import './ButtonOne.css'

const ButtonOne = ({text, icon, link}) => {
    return (
        <>
            <button class="custom-button">
                <span class="button-content">
                    <span class="button-text">{text}</span>
                    <span class="button-icon">{icon}</span>
                </span>
                <span class="button-background"></span>
            </button>
        </>
    )
}

export default ButtonOne