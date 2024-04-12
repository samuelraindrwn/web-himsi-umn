import { useState, useEffect } from "react";
import Image from "next/image";
import Chevron from "@/components/(assets)/chevron";
import XSymbol from "@/components/(assets)/x-symbol";

export default function MainEvents() {
  const [events, setEvents] = useState([
    {
      id: 0,
      eventName: "ISFEST",
      url: "",
      logo: "",
      desc: "",
      isFlipped: false,
    },
    {
      id: 1,
      eventName: "PERPROD",
      url: "",
      logo: "",
      desc: "",
      isFlipped: false,
    },
    {
      id: 2,
      eventName: "DISCO",
      url: "/img/compile.png",
      logo: "/img/logo-disco.png",
      desc: "",
      isFlipped: false,
    },
    {
      id: 3,
      eventName: "SIM",
      url: "",
      logo: "",
      desc: "",
      isFlipped: false,
    },
  ]);

  const eventLength = events.length - 1;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleFlippedClick = (index: any) => {
    const updatedEvents = [...events];
    updatedEvents[index].isFlipped = !updatedEvents[index].isFlipped;
    setEvents(updatedEvents);
  };

  const handleNextClick = () => {
    const nextIndex = carouselIndex === eventLength ? 0 : carouselIndex + 1;
    setCarouselIndex(nextIndex);
    resetAllFlips();
  };

  const handlePrevClick = () => {
    const prevIndex = carouselIndex === 0 ? eventLength : carouselIndex - 1;
    setCarouselIndex(prevIndex);
    resetAllFlips();
  };

  const resetAllFlips = () => {
    const updatedEvents = events.map((event) => ({
      ...event,
      isFlipped: false,
    }));
    setEvents(updatedEvents);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!events.some((event) => event.isFlipped)) {
      interval = setInterval(() => {
        const nextIndex = carouselIndex === eventLength ? 0 : carouselIndex + 1;
        setCarouselIndex(nextIndex);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [carouselIndex, eventLength, events]);

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
        >
          <div
            className={
              event.isFlipped ? "event-card-inner flip" : "event-card-inner"
            }
          >
            <div className="front">
              <Image
                className="bg-img-event"
                alt={event.eventName}
                width={375}
                height={500}
                src={event.url}
              />
              <div className="logo-event-wrapper">
                <Image
                  alt={event.eventName}
                  width={700}
                  height={700}
                  src={event.logo}
                  onClick={() => handleFlippedClick(index)}
                />
              </div>
            </div>
            <div className="back">
              <span title="Close" onClick={() => handleFlippedClick(index)}>
                <XSymbol />
              </span>
              <div className="desc-event">
                <h1>{event.eventName}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  consequatur recusandae veniam officia, quam ducimus debitis ut
                  adipisci, architecto nulla nam atque natus, aut dolor.
                  Loremipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas iste, totam amet tenetur, dolorem quidem voluptatum
                  neque esse suscipit perferendis veniam reprehenderit! Ipsum,
                  sequi sed. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Placeat molestiae accusantium quas error quam non velit,
                  deleniti fugiat eum reprehenderit dolore facere earum
                  temporibus doloribus consectetur iure possimus, veritatis hic.
                </p>
                <a>See More Details &rarr;</a>
              </div>
            </div>
          </div>
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
