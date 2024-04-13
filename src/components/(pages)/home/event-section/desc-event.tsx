export default function DescEvent({
  event,
}: {
  event: {
    id: number;
    eventName: string;
    url: string;
    logo: string;
    desc: string;
    isFlipped: boolean;
  };
}) {
  const maxLengthDesc = 550;
  let truncatedDesc =
    event.desc.length > maxLengthDesc
      ? event.desc.slice(100, maxLengthDesc) + "..."
      : event.desc;

  return (
    <div className="desc-event">
      <h1>{event.eventName}</h1>
      <p>{truncatedDesc}</p>

      <a>See More Details &rarr;</a>
    </div>
  );
}
