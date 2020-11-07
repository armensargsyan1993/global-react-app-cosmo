import React from "react"
import { Card } from "../Card/Card"

export const CardGroupGenerator = (props:any) => {
    if(props.arr && props.arr.length){
        return props.arr.map((elem:any) => <Card children={props.children} col ={props.col} {...elem} key={elem.id}/>)
    }
    return <>dont loaded yet</>
}