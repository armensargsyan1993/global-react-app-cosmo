import React from "react"
import styles from './checkBox.module.scss'

export const CheckBox = (props:any) => {
    return (
            <div className={`col-${props.col} ${styles.col} `}>
                <label className={`${styles.label}`}>
                    <input style={{opacity:"0"}} name={props.name} type="checkbox" ref={props.register({required:true})} />
                    <span className={`${styles.text}`}>
                        {props.children}
                    </span>
                </label>
            </div>
    )
}