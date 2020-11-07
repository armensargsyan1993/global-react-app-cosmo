import React from "react"
import styles from './card.module.scss'

export const Card = (props:any) => {
    return (
        <div className={`col-${props.col} ${styles.card} ${props.col === '12' ? styles.sliderCard : ''}`}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.text}>{props.body}</p>
            {props.children}
        </div>
    )
}