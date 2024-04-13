import { useState, useEffect } from "react";
import Image from "next/image";
import Chevron from "@/components/(assets)/chevron";
import XSymbol from "@/components/(assets)/x-symbol";
import DescEvent from "./desc-event";

export default function MainEvents() {
  const [events, setEvents] = useState([
    {
      id: 0,
      eventName: "ISFEST",
      url: "",
      logo: "",
      desc: "WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWW",
      isFlipped: false,
    },
    {
      id: 1,
      eventName: "PERPROD",
      url: "",
      logo: "",
      desc: "WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWW WWW WWWWWWWWW WWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWW awdwad",
      isFlipped: false,
    },
    {
      id: 2,
      eventName: "DISCO",
      url: "/img/compile.png",
      logo: "/img/logo-disco.png",
      desc: "AAAAAAAAAAAAAAAAAAAAAAAA ADWDAi iwjdpajd idjawondow fwjf0wnwi 0fwifjpakwdaw wojfpawnfpoaw wodkpawndpoawdwpaj w0fkpawfpoawj a w0da[wd0jwndw owjfbfianf aiwjfafijawnf ndow fwjf0ndow fwjf0 doaowjdpoawj pwkafnw wfkawkfpwja wa0fwwondapjda pjeoqi0hqn1u28ei1 02je1bubwduh 93u9hjd 0heind 0`hjnda wjowbiuiabf ejoiqj2ejq Dengan perbaikan ini, deskripsi akan dipotong dengan benar dan ditampilkan sesuai kebutuhan. Semoga ini membantu! Jika Anda memiliki pertanyaan lain, jangan ragu untuk bertanya. wadawd wadawdawf aowkpao wad dpoawj pwkafnw wfkawkfpwja wa0fwwondapjda pjeoqi0hqn1u28ei1 02je1bubwduh 93u9hjd 0heind 0`hjnda wjowbiuiabf ejoiqj2ejq Dengan perbaikan ini, deskripsi akan dipotong dengan",
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
              <DescEvent event={event} />
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
