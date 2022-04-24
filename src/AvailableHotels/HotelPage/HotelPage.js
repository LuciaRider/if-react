import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HotelPage.css';
import Button from '../../Components/Button/Button';

const urlHotel = 'https://fe-student-api.herokuapp.com/api/hotels';

const useFetch = (url) => {

    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const items = await res.json();

                setHotelData(items);
                setLoading(false);

            } catch(e) {
                console.log(e.message);
                setLoading(false);
            }
        };

        getData();

    }, []);

    return {
        hotelData,
        loading,
    }

}

function HotelPage()  {
    const {id} = useParams();

    const {hotelData, loading} = useFetch(`${urlHotel}/${id}`);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return  loading ? (<p>Loading...</p>) :
        (
            <>
                <div className="hotel_container">
                    <div className="hotel_card">
                        <img className="hotel_img" src={hotelData.imageUrl} alt={hotelData.name}/>
                        <p>{hotelData.name}</p>
                        <p>{hotelData.city}, {hotelData.country}</p>
                    </div>
                    <div className="btn_homepage">
                        <Button onClick={handleClick} type="button"/>
                    </div>
                </div>
            </>
        )
}

export default HotelPage;