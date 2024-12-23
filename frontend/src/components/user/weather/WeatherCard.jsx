import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import Image from "../../../../assets/Weather_logo.svg";
import { weather } from "../../../apis/api";

const WeatherCard = () => {
  const [currweather, setWeather] = useState(null);  // Initialize state to store weather data
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await weather();  // Fetch weather data
        setWeather(data);  // Set the data to state
        setLoading(false); 
        console.log(data) // Mark loading as false when data is fetched
      } catch (err) {
        setError("Failed to fetch weather data.");
        setLoading(false);  // Stop loading on error
      }
    };

    fetchWeather();
  }, []);

  const formatTime = (unixTime) => {
    const date = new Date(unixTime * 1000);  // Convert UNIX time to milliseconds
    return date.toLocaleTimeString();  // Convert to a readable time format
  };

  // If loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }
  const roundedTemp = currweather?.main?.temp.toFixed(1); 

  // If weather data is successfully loaded, display the data
  return (
    <div className="weather_card">
      <h1>Chennai, Egmore</h1>

      <div className="weather_img">
        <img src={Image} alt="weather Logo" />
      </div>

      <div className="weather_details">
        <div className="left_side">
          <h1>
            {roundedTemp} <span>o</span> C
          </h1>
        </div>
        <div className="right_side">
        <div className="wind">
            <p>Wind: {currweather?.wind?.speed} km/h</p>
          </div>
          <div className="sun">
            <p>Sunrise: {formatTime(currweather?.sys?.sunrise)}</p>
            <p>Sunset: {formatTime(currweather?.sys?.sunset)}</p>
          </div>
          <p>Weather: {currweather?.weather[0]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
