import React from "react"
import { Button } from "../Button/Button"
import { IconCardCreator } from "../IconCardCreator/IconCardCreator"
import styles from './about.module.scss'
import shadowWoman from './img/shadowWoman.png'

const cards = [
    {

        title:'Metiew & Smith',
    },
    {

        title:'Fantasy interactive',
 
    },
    {
        title:'Paul & shark',

    }
]

export const About = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className="row">
                    <div className={`col-6 ${styles.title}`}>
                        <h2>
                            We believe in passionate people
                        </h2>
                        <Button className={styles.button}>hire us <span>&#8594;</span></Button>
                    </div>
                    <div className={`col-6 ${styles.cosmonaut}`}>
                        <img src={shadowWoman} alt="shadowWoman" />
                    </div>
                </div>
                <IconCardCreator iconCardWrapperClassName={styles.iconCardWrapperClassName} arr={cards} className={styles.iconCard} wrapperClassName={styles.iconCards}/>
            </div>
        </section>
    )
}