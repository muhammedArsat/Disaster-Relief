import React from "react";
import "./HeroicCard.css";
import { FaArrowRight } from "react-icons/fa";
const HeroicCard = () => {
  return (
    <div className="heroic_section">
      <h2>
        Welcome to RescueBridge Tracking Disasters, Supporting Communities, and
        Saving Lives.
      </h2>
      <h3>
        Disasters can happen anytime, anywhere. At RescueBridge , we help you
        stay informed with live updates on disasters around the world and
        real-time weather tracking.
      </h3>
      <button>
        Get Started <FaArrowRight size={15} />{" "}
      </button>
    </div>
  );
};

export default HeroicCard;
