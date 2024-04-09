import { useState } from "react";
import Image from "next/image";

export default function EventSection() {
  const [events, setEvent] = useState([
    {
      id: 0,
      eventName: "ISFEST",
      url: "",
    },
    {
      id: 1,
      eventName: "PERPROD",
      url: "",
    },
    {
      id: 2,
      eventName: "DISCO",
      url: "",
    },
    {
      id: 3,
      eventName: "SIM",
      url: "",
    },
  ]);
  return (
    <>
      <section id="event">
        <div className="event-container">
          <h1>OUR MAIN EVENTS</h1>
          <div className="event-wrapper">
            {events.map((events, i) => (
              <div className="event-card" key={i}>
                {events.eventName}
              </div>
            ))}
          </div>
          <button className="btn-style-1">Learn More</button>
        </div>
      </section>
    </>
  );
}
