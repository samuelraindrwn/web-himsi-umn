import Image from "next/image";

export default function creation1() {
  const creation = [
    {
      id: 1,
      url: "/vids/uiux.mp4",
    },
    {
      id: 2,
      url: "/vids/datvis.mp4",
    },
  ];
  return (
    <>
      {creation.map((creation, i) => (
        <video key={i} loop={true} autoPlay muted>
          <source src={creation.url} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
