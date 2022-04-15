import React from "react";
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';

// const data = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa  Cruz de Tenerife',
//     country: 'Spain',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//   },
// ];

// const Slider = ({data}) => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={4}
//     >
//       {data.map((element, index) => {
//         return (
//         <SwiperSlide key={index}>
//         <div className="content_img">
//           <img src={element.imageUrl} alt={element.name} />
//           <p className="accent-blue">{element.name}</p>
//           <p className="secondary">{element.city}, {element.country}</p>
//         </div>
//       </SwiperSlide>)
//       })}
//     </Swiper>
//   )
// }

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