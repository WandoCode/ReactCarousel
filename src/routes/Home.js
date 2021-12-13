import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";

const axios = require("axios");

function Home() {
  const [imgSrcAndId, setImgSrcAndId] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = () => {
    axios.get("http://localhost:8080/images").then((res) => {
      setImgSrcAndId(res.data);
    });
  };

  return (
    <div className="home">
      <Carousel imgSrcAndId={imgSrcAndId} automaticSlide={false} delay={2} />
    </div>
  );
}

export default Home;
