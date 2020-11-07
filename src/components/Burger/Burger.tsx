import React from "react"
import { useState } from "react"
import './burger.scss'


export const Burger = () => {
    const [isActive, setActive] = useState(false)
    const toggleClass = (event:any) => {
        event.preventDefault()
        setActive(!isActive);
      };
    return (
        <a href="/" 
        className={`menu-button${isActive ? " is-active" : ''}`}
        id="menuButton"
        onClick={toggleClass}>
            <span className="burger-icon"></span>
        </a>
    )
}