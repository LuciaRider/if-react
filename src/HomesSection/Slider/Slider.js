import React from "react";
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
    .finally(() => {});
  }, [])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
    >
      {data.map((element, index) => {
        return (
        <SwiperSlide key={index}>
        <div className="content_img">
          <div class="image_wrapper">
            <img src={element.imageUrl} alt={element.name}/>
          </div>
            <p className="accent-blue">{element.name}</p>
            <p className="secondary">{element.city}, {element.country}</p>
        </div>
      </SwiperSlide>)
      })}
    </Swiper>
  )
}

export default Slider;