import React from "react";
import { NavLink } from 'react-router-dom'

const ScrollBar = () => {
    let c = 0
    const whellHandler = (event:any) => {
        let a:any = document.querySelectorAll('.scrollbar-wrapper a')
        setTimeout(() => {
            event.deltaY > 0 ? c = c + 1 : c = c - 1
            if(c > 4){
                c = 0
            }
            if(c < 0){
                c = 4
            }
            a[c].click()
            document.body.addEventListener('wheel',whellHandler,{once:true})
        },1000)
        window.onwheel = null
    }
    
    document.body.addEventListener('wheel',whellHandler,{once:true})
    return (
        <div className="scrollbar-wrapper">
            <div className="line"></div>
            <li>
                <NavLink to={'/home'} activeClassName='active'>
                    <span>1</span><span className="o"></span><span>home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/works'} activeClassName='active'>
                    <span>2</span><span className="o"></span><span>works</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'about'} activeClassName='active'>
                    <span>3</span><span className="o"></span><span>about</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} activeClassName='active'>
                    <span>4</span><span className="o"></span><span>contact</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/hireUs'} activeClassName='active'>
                    <span>5</span><span className="o"></span><span>hireUs</span>
                </NavLink>
            </li>
        </div>
    );
}

export default ScrollBar
