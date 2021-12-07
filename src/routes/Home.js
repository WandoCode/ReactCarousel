import Carousel from "../components/Carousel";

function Home() {
  const imgSrc = [
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/350",
    "https://placekitten.com/250/300",
    "https://placekitten.com/650/500",
    "https://placekitten.com/200/200",
  ];
  return (
    <div className="home">
      <Carousel imgSrc={imgSrc} />
    </div>
  );
}

export default Home;
