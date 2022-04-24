import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AvailableHotels.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import HotelPage from '../AvailableHotels/HotelPage/HotelPage';
import Button from '../Components/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
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

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/');
  }

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
                            //   <HotelPage  key={element.id} id={element.id} item={element}/>
                            // Link to = /hotels/${hotelData.id}
                            <SwiperSlide key={index}>
                                    <div className="content_img">
                                        <div class="image_wrapper">
                                            <img src={hotelData.imageUrl} alt={hotelData.name}/>
                                        </div>
                                        <p className="accent_blue">{hotelData.name}</p>
                                        <p className="secondary">{hotelData.city}, {hotelData.country}</p>
                                    </div>
                            </SwiperSlide>
                      ) :             
                        <div>
                            <p className="hotel-no-found">The hotel was not found</p>
                            <button onClick={handleClick} className="btn_available">Back</button>
                        </div>
                    }
                    </Swiper>
              </div>
          </div>
      </section>
  )
};
  
export default AvailableHotels;