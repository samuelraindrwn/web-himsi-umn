import MainEvents from "./main-event";

export default function EventSection() {
  return (
    <section id="event">
      <div className="event-container">
        <h1>
          <span>OUR MAIN</span> EVENTS
        </h1>
        <MainEvents />
        <button className="btn-style-1">See More Events</button>
      </div>
    </section>
  );
}
