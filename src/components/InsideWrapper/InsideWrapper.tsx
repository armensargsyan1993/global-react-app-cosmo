import React, { useState } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { About } from "../About/About"
import { Burger } from "../Burger/Burger"
import { Contact } from "../Contact/Contact"
import { HireUs } from "../HireUs/HireUs"
import { Home } from "../Home/Home"
import { Logotype } from "../Logotype/Logotype"
import ScrollBar from "../ScrollBar/ScrollBar"
import { Works } from "../Works/Works"
import styles from './insideWrapper.module.scss'


export const InsideWrapper = () => {
    let [st, setSt] = useState(true)

    let callbackIsShow = (isShow:boolean = false) => {
        setSt(isShow)
    }
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
                            <ScrollBar callback={callbackIsShow}/>
                        </div>
                    </aside>
                    <main className={`${styles.main} ${st ? styles.show :styles.hide}`}>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route  path="/home" component={Home}/>
                            <Route  path='/works' component={Works}/>
                            <Route  path='/about' component={About}/>
                            <Route  path='/contact' component={Contact}/>
                            <Route  path='/hireUs' component={HireUs}/>
                        </Switch>
                    </main>
                    </div>
            </div>
    )
}