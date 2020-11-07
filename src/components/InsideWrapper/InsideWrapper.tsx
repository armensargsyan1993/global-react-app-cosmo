import React from "react"
import { Route, Switch } from "react-router-dom"
import { About } from "../About/About"
import { Burger } from "../Burger/Burger"
import { HireUs } from "../HireUs/HireUs"
import { Home } from "../Home/Home"
import { Logotype } from "../Logotype/Logotype"
import ScrollBar from "../ScrollBar/ScrollBar"
import { Works } from "../Works/Works"
import styles from './insideWrapper.module.scss'


export const InsideWrapper = () => {
    return (
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <div className="row">
                        <div className="col-6">
                            <Logotype/>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <Burger/>
                        </div>
                    </div>
                </header>
                <div className="d-flex">
                    <aside className="aside">
                        <div className="nav">
                            <ScrollBar/>
                        </div>
                    </aside>
                    <main className={styles.main}>
                        <Switch>
                            <Route exact path='/home' component={Home}/>
                            <Route path='/Works' component={Works}/>
                            <Route path='/About' component={About}/>
                            <Route path='/HireUs' component={HireUs}/>
                        </Switch>
                    </main>
                    </div>
            </div>
    )
}