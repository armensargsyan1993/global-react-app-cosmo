import React from "react"

export const Button = (props:button) => {
    return <button className={props.className}>{props.children}</button>
}

interface button {
    className?:string,
    children:any,
}