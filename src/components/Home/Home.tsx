import React, { useEffect } from "react"
import cosmonaut from './img/cosmonaut.png'
import styles from './home.module.scss'
import { CardGroupGenerator } from "../CardGroupGenerator/CardGroupGenerator"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { cardsLoader } from "../../redux/actions"

/* const cards = [
    {
        col:4,
        title:'Metiew & Smith',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        col:4,
        title:'Fantasy interactive',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        col:4,
        title:'Paul & shark',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
] */

export const Home = () => {
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
                <div className="row">
                    <div className={`col-6 ${styles.title}`}>
                        <h1>
                            Your next
                            interactive
                            experience
                        </h1>
                        <Button className={styles.button}>hire us &#8594;<span></span></Button>
                    </div>
                    <div className={`col-6 ${styles.cosmonaut}`}>
                        <img src={cosmonaut} alt="cosmonaut" />
                    </div>
                </div>
                <div className={`row ${styles.cards}`}>
                    <CardGroupGenerator col={4} arr={cards}/>
                </div>
            </div>
        </section>
    )
}