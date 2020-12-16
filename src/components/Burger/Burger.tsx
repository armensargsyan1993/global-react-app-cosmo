import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { hideNav, showNav } from "../../redux/actions"
import './burger.scss'


export const Burger:React.FC = () => {
    const [isActive, setActive] = useState(false)
    const dispatch = useDispatch()
    const toggleClass = (event:React.MouseEvent<HTMLAnchorElement>):void => {
        event.preventDefault()
        !isActive ? dispatch(showNav()) : dispatch(hideNav())
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