import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './AvailableHotels.css';
import 'swiper/css'

const url = 'https://fe-student-api.herokuapp.com/api/hotels';

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const getData = async () => {
          try {
              setLoading(true);
              const res = await fetch(url);
              const items = await res.json();

              setData(items);
              setLoading(false);

          } catch(e) {
              console.log(e.message);
              setLoading(false);
          }
      };

      getData();

  }, [url]);

  return {
      data,
      loading,
  }
};

function AvailableHotels (props) {

  const searchValue = props.searchValue;
  const {data, loading} = useFetch(`${url}?search=${searchValue}`);

  return  loading ? (<p>Loading...</p>) :

  (
      <section className="available_hotels homes">
          <div className="available_container homes_container">
              <h2 className="availavle_title">Available hotels</h2>
              <div className="available_content homes_content">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                    >
                        { searchValue.length?
                        searchValue.map((hotelData, index) =>
                                    <SwiperSlide key={index}>
                                        <Link to={`/hotels/${hotelData.id}`} className="available_card">
                                                <div className="content_img">
                                                    <div className="image_wrapper">
                                                        <img src={hotelData.imageUrl} alt={hotelData.name}/>
                                                    </div>
                                                    <p className="accent_blue">{hotelData.name}</p>
                                                    <p className="secondary">{hotelData.city}, {hotelData.country}</p>
                                                </div>
                                        </Link>
                                    </SwiperSlide>
                      ) :             
                        <div>
                            <p className="hotel-no-found">The hotel was not found</p>
                        </div>
                    }
                    </Swiper>
              </div>
          </div>
      </section>
  )
};
  
export default AvailableHotels;