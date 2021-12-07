import Carousel from "../components/Carousel";

function Home() {
  const imgSrc = [
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1654760/pexels-photo-1654760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];
  return (
    <div className="home">
      <Carousel imgSrc={imgSrc} />
    </div>
  );
}

export default Home;
