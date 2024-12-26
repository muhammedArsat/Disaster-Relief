import React, { useState ,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./HomeFeed.css";
import { MdOutlineMyLocation } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const homeFeed = ({place,image,description,date}) => {
  const navigate=useNavigate();
  const [isExpanded,setIsExpanded]=useState(false);
  useEffect(()=>{
    Aos.init({duration:1500});
  },[]);
  const handleLocationNavigate=()=>{
    navigate("/user/location")
  }
  const handleFundNavigate=()=>{
    navigate("/user/fund")
  }
  const toggleReadMore=()=>{
    setIsExpanded((prev)=>!prev);
  }
  return (
    <div className="home-feed">
    <div className='feed_post' data-aos="fade-right">
        <h2>{place}</h2>
        <img src={image} alt="Feeds"/>
        <div className='icons'>
        <MdOutlineMyLocation  onClick={handleLocationNavigate}/>
         <PiMoneyFill onClick={handleFundNavigate}/>
        </div>

        <p className='description'>
          {isExpanded?description:`${description.substring(0,100)}`}
          {description.length>100 && (
            <span clcssName='read-more' onClick={toggleReadMore}>
              {isExpanded?"Read less":"Read more..."}
            </span>
          )}
          </p>
        <p className='date-col'>{date}</p>
        </div>
    </div>
  )
}

export default homeFeed
