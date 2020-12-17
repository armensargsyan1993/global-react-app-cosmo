import React, {useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom'
import { CallbackIsSHow } from "../InsideWrapper/InsideWrapper";
import styles from './scrollbar.module.scss'

let navLinks: NodeListOf<HTMLAnchorElement> | [] = []
let thereIs:boolean = false



let wheelListener = (func:any):void =>{
    thereIs = true
    document.body.addEventListener('wheel',func,{once:true})
}



const ScrollBar:React.FC<Props> = ({callback,propsShow}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [show, setShow] = useState(true)
    const [block,setBlock] = useState(0)
    const firstUpdate = useRef(true);
    const history =  useHistory()


    useEffect(() => {
        navLinks = document.querySelectorAll(`.${styles['scrollbar-wrapper']} a`)
        
        navLinks.forEach((elem:HTMLAnchorElement,i:number) => {
            elem.dataset.scrollBarNumber = `${i}`
        })
        setCurrentPage(():number => {
            let sum = 0
            Array.from(navLinks).find((elem:HTMLAnchorElement,i:number) => {
                if(elem.classList.contains('active')){
                    sum = i
                }
            })
            return sum
        })
    },[])

    useEffect(() =>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
          }
          if(block == 3){
            navLinks[currentPage].click()
          }
          callback(show)
    },[block])

    const wheelHandler = (event:any):void => {
        const target = event.target
        const clName = "disable__global__wheel"
        thereIs = false
        if(target.parentNode.classList.contains(clName) || target.classList.contains(clName)){
            wheelListener(wheelHandler)
            return
        }
        if(navLinks.length){
            event.deltaY < 0 ? setCurrentPage((prev) => {
                let current = prev - 1
                if(current < 0){
                    current = navLinks.length - 1
                }
                return current
            }) : setCurrentPage((prev) => {
                let current = prev + 1
                if(current > navLinks.length - 1){
                    current = 0
                }
                return current
            })
            setBlock(3)
        }
    }
    if(!navLinks.length){
        wheelListener(wheelHandler)
    }


    const delayRedirect = (event:any) => {
        event.preventDefault();
        let scrollBarNumber = event.target.parentNode.dataset.scrollBarNumber || event.target.dataset.scrollBarNumber
        scrollBarNumber = +scrollBarNumber
        let attr = event.target.parentNode.getAttribute('href') || event.target.getAttribute('href')
        if(block != 3){
            setCurrentPage(scrollBarNumber)
        }
        setShow(false)
        setBlock(1)
        setTimeout(()=>history.push(attr.slice(1)), 1000);
        setTimeout(() => {
            if(!thereIs){
                wheelListener(wheelHandler)
            }
            setShow(true)
            setBlock(2)
        },1100)
      }

    return (
        <div className={`${styles['scrollbar-wrapper']} ${propsShow ? styles.show : styles.hide}`}>
            <div className={styles.line}></div>
            <li>
                <NavLink to={'/home'} onClick={delayRedirect} activeClassName={styles.active}>
                    <span>1</span><span className="o"></span><span>home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/works'} onClick={delayRedirect} activeClassName={styles.active}>
                    <span>2</span><span className="o"></span><span>works</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/about'} onClick={delayRedirect} activeClassName={styles.active}>
                    <span>3</span><span className="o"></span><span>about</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} onClick={delayRedirect} activeClassName={styles.active}>
                    <span>4</span><span className="o"></span><span>contact</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/hireUs'} onClick={delayRedirect} activeClassName={styles.active}>
                    <span>5</span><span className="o"></span><span>hireUs</span>
                </NavLink>
            </li>
        </div>
    );
    }

    type Props = {
        callback:CallbackIsSHow,
        propsShow:boolean
    }

export default ScrollBar


