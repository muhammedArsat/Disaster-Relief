import React from "react";
import Map from "../../../components/user/map/Map"
import WeatherCard from "../../../components/user/weather/WeatherCard";
import './Location.css'

const LocationPage = () => {
  return (
    <div className="location_wrapper">
       <Map/>
       <WeatherCard/>
    </div>
 
  );
};

export default LocationPage;
