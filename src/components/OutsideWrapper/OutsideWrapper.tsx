import React from "react"
import { InsideWrapper } from "../InsideWrapper/InsideWrapper"
import outsideWrapper from './outsideWrapper.module.scss'


export const OutsideWrapper = () => {
    return (
        <div className={outsideWrapper["outside-wrapper"]}>
            <InsideWrapper/>
        </div>
    )
}