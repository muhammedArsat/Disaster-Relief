import React, { useEffect } from 'react';
import Aos from 'aos';
import './FeedCard.css';
import 'aos/dist/aos.css';
import { GiDuration } from 'react-icons/gi';
const FeedCard = ({ content, image }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="feed_card">
            <div className="left_side" data-aos="fade-right">
                <h3>{content}</h3>
            </div>
            <div className="right_side" data-aos="fade-left">
                <img src={image} alt="feed card first image" />
            </div>
        </div>
    );
};

export default FeedCard;
