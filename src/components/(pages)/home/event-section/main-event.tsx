import { useState, useEffect } from "react";
import Chevron from "@/components/(assets)/chevron";

export default function MainEvents() {
  const [events, setEvents] = useState([
    { id: 0, eventName: "ISFEST", url: "" },
    { id: 1, eventName: "PERPROD", url: "" },
    { id: 2, eventName: "DISCO", url: "" },
    { id: 3, eventName: "SIM", url: "" },
  ]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const eventLength = events.length - 1;
  const [hovered, setHovered] = useState(false);

  const handleNextClick = () => {
    const nextIndex = carouselIndex === eventLength ? 0 : carouselIndex + 1;
    setCarouselIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = carouselIndex === 0 ? eventLength : carouselIndex - 1;
    setCarouselIndex(prevIndex);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!hovered) {
      interval = setInterval(() => {
        const nextIndex = carouselIndex === eventLength ? 0 : carouselIndex + 1;
        setCarouselIndex(nextIndex);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [carouselIndex, eventLength, hovered]);
  return (
    <div className="event-wrapper">
      {events.map((event, index) => (
        <div
          className={`event-card ${
            index === carouselIndex
              ? "active"
              : index === (carouselIndex + 1) % events.length
              ? "next"
              : ""
          }`}
          key={event.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {event.eventName}
          <div className="desc-event"></div>
        </div>
      ))}
      <div className="carousel-ctrl">
        <span
          title="previous"
          className="chevron-left"
          onClick={handlePrevClick}
        >
          <Chevron />
        </span>
        <span title="next" className="chevron-right" onClick={handleNextClick}>
          <Chevron />
        </span>
      </div>
    </div>
  );
}
