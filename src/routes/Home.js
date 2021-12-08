import Carousel from "../components/Carousel";
const datas = require("../assets/datas.json");

function Home() {
  const imgSrcAndId = datas.images;

  return (
    <div className="home">
      <Carousel imgSrcAndId={imgSrcAndId} />
    </div>
  );
}

export default Home;
