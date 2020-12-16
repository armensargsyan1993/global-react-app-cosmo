import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { RootState } from "../../redux/reducers/rootReducer"
import { About } from "../About/About"
import { Burger } from "../Burger/Burger"
import { Contact } from "../Contact/Contact"
import { HireUs } from "../HireUs/HireUs"
import { Home } from "../Home/Home"
import { Logotype } from "../Logotype/Logotype"
import ScrollBar from "../ScrollBar/ScrollBar"
import { Works } from "../Works/Works"
import styles from './insideWrapper.module.scss'



export const InsideWrapper:React.FC = () => {
    let [st, setSt] = useState(true)
    const show = useSelector((state:RootState) => state.app.show)
    let callbackIsShow:CallbackIsSHow = (isShow = false) => {
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
                            <ScrollBar propsShow={show} callback={callbackIsShow}/>
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


export type CallbackIsSHow = (isShow:boolean) => void