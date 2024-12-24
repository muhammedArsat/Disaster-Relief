import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import Image from '../../../../assets/Weather_logo.svg';
import { weather } from '../../../apis/api';
import Aos from "aos";
import 'aos/dist/aos.css';

const WeatherCard = () => {
    const [currweather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
            Aos.init({duration:1000})
    },[])

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weather();
                setWeather(data);
                setLoading(false);
                console.log(data);
            } catch (err) {
                setError('Failed to fetch weather data.');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    const formatTime = (unixTime) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const roundedTemp = currweather?.main?.temp.toFixed(1);

    return (
        <div className="weather_card">
            <h1>Check Weather Here</h1>
            <div className="weather_info">
                <div className="temperature"  data-Aos="fade-right">
                    <div className="weather_info_heading">
                        <h4>Temperature</h4>
                    </div>
                    <h2>
                        {roundedTemp} C
                    </h2>
                </div>

                <div className="wind"  data-Aos="fade-right">
                <div className="weather_info_heading">
                        <h3>Wind</h3>
                    </div>
                    <h2> {currweather?.wind?.speed} km/h</h2>
                </div>

                <div className="sunrise"  data-Aos="fade-right">
                <div className="weather_info_heading">
                        <h3>Sunrise</h3>
                    </div>
                    <h2> {formatTime(currweather?.sys?.sunrise)}</h2>
                </div>

                <div className="sunset"  data-Aos="fade-right">
                     <div className="weather_info_heading">
                        <h3>Sunset</h3>
                    </div>
                    <h2>{formatTime(currweather?.sys?.sunset)}</h2>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
