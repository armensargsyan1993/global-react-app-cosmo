import React from "react"
import { CustomCarousel } from "../CustomCarousel/CustomCarousel"
import { Button } from "../Button/Button"
import styles from './works.module.scss'

export const Works = () => {
    return (
            <section className={styles.work}>
                <Button className={styles.button}>Hire us</Button>
                <div className={styles.title}>
                    <h2>Selected Works</h2>
                </div>
                <div className={styles.content}>
                    <CustomCarousel/>
                </div>
            </section>
    )
}