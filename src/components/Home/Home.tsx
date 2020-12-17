import React, { useEffect } from "react"
import cosmonaut from './img/cosmonaut.png'
import styles from './home.module.scss'
import { CardGroupGenerator } from "../CardGroupGenerator/CardGroupGenerator"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { cardsLoader } from "../../redux/actions"

export const Home:React.FC = () => {
    const cards = useSelector((state:any) => state.home.cards)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=3')
        .then(response => response.json())
        .then(data => {
            dispatch(cardsLoader(data))
        }) 
     },[])
    return (
        <section className={styles.home}>
            <div className="container">
                <div className="row flex-nowrap">
                    <div className={`col-6 ${styles.title}`}>
                        <h1>
                            Your next
                            interactive
                            experience
                        </h1>
                        <Button className={styles.button}>hire us &#8594;<span></span></Button>
                    </div>
                    <div className={`col-6 ${styles.cosmonautContainer}`}>
                        <img className={styles.cosmonaut} src={cosmonaut} alt="cosmonaut" />
                    </div>
                </div>
                <div className={`row ${styles.cards}`}>
                    <CardGroupGenerator col={4} arr={cards}/>
                </div>
            </div>
        </section>
    )
}