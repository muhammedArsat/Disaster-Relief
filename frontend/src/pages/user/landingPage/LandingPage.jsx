import React from 'react';
import './Landing.css';
import HeroicCard from '../../../components/user/heroicSection/HeroicCard';
import FeedCard from '../../../components/user/feedCard/FeedCard';
import img1 from '../../../../assets/feed_card_img1.png';
import img2 from '../../../../assets/feed_card_img2.png';
import img3 from '../../../../assets/feed_card_img3.avif';
const LandingPage = () => {
    const card1 =
        'Real-Time Disaster Tracking Stay informed about natural disasters like earthquakes, floods, hurricanes, wildfires, and more. Our interactive map shows disaster-affected areas around the globe, helping you stay prepared.';
    const card2 =
        'Live Weather Updates Monitor live weather conditions and forecasts to plan ahead and stay safe. Get warnings about storms, extreme weather, and potential risks before they occur';
    const card3 =
        'Be part of the change. Help those in need by contributing to verified disaster relief efforts. Your donations provide food, shelter, medical aid, and recovery support for affected individuals and communities.';

    return (
        <div>
            <div className="landing_container">
                <HeroicCard />
                <div className="landing_contents">
                    <div className="landing_content1">
                        <FeedCard content={card1} image={img1} />
                    </div>
                    <div className="landing_content2">
                        <FeedCard content={card2} image={img2} />
                    </div>
                    <div className="landing_content3">
                        <FeedCard content={card3} image={img3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
