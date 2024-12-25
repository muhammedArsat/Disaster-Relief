import React from "react";
import "./Home.css";
import HomeFeed from "../../../components/user/homeFeed/homeFeed";
import img1 from "../../../../assets/kc-bk-hero.jpg";

const Home = () => {
  const feeds = [
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    {
      place: "Egmore, Chennai",
      image: img1,
      disaster: "Flood",
      description:
        "Severe flooding in chennai - egmore has displaced over 10,000 families, leaving them in urgent need of shelter and aid.",
      date: "2024-12-24",
    },
    
  ];

  return (
    <div>
      <div className="home_container">
        {feeds.map((feed, index) => (
          <HomeFeed
            key={index}
            place={feed.place}
            image={feed.image}
            disaster={feed.disaster}
            description={feed.description}
            date={feed.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
