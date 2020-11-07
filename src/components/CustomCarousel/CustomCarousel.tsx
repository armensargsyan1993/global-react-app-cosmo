import * as React from 'react'
import { useEffect} from "react";
import Slider from "react-slick";
import '../global.scss';
import { useDispatch, useSelector } from "react-redux";
import { photoLoader } from "../../redux/actions";
import { Card } from '../Card/Card';

export const CustomCarousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
      };
      const st = {
          width:'800px',
          margin:'0 auto'
      }
    const dispatch = useDispatch()
    useEffect(() => {
           fetch('https://jsonplaceholder.typicode.com/photos/?_limit=21')
           .then(response => response.json())
           .then(data => dispatch(photoLoader(data))) 
        },[])
        const images = useSelector((s:any) => s.app.images)
        return (
            <div  style={st}>
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