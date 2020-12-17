import * as React from 'react'
import { useEffect} from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { photoLoader } from "../../redux/actions";
import { Card } from '../Card/Card';
import styles from './customCarousel.module.scss';
import { useState } from 'react';


export const CustomCarousel = () => {
    let [slideShow,setSlideShow] = useState(3)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: slideShow,
        speed: 500,
      };
    const dispatch = useDispatch()
    useEffect(() => {
        if(window.innerWidth <=992){
            setSlideShow(1)
        }
     },[]);
    useEffect(() => {
        window.addEventListener('resize',(e:any) => {
            if(e.target.innerWidth <= 992){
                setSlideShow(1)
            }else{
                setSlideShow(3)
            }
        })
     },[]);
    useEffect(() => {
           fetch('https://jsonplaceholder.typicode.com/photos/?_limit=21')
           .then(response => response.json())
           .then(data => dispatch(photoLoader(data)))
        },[])
        const images = useSelector((s:any) => s.app.images)
        return (
            <div  className={styles['slider-container']}>
                <Slider {...settings}>
                    {images.map((elem:any) => {
                        
                        return (
                            <div key={elem.id}>
                                <img width='100px' src={elem.url} alt=""/>
                                <Card col = {'12'}body={elem.title} title={elem.id}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>        
        );
}