import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Carousel(props) {
  const [actualPictNum, setActualPictNum] = useState(0);
  const [currentPicture, setCurrentPicture] = useState();

  // Change the ImageSlide displayed following the position in the array of image src
  useEffect(() => {
    const imgUrl = props.imgSrcAndId[actualPictNum];
    setCurrentPicture(
      <ImageSlide
        url={`${imgUrl.url}`}
        id={`${imgUrl.id}`}
        alt={`${imgUrl.title}`}
      />
    );
  }, [actualPictNum]);

  const prevPicture = () => {
    let pictureNum = (actualPictNum - 1) % props.imgSrcAndId.length;
    if (pictureNum < 0) {
      pictureNum = props.imgSrcAndId.length - 1;
    }
    setActualPictNum(pictureNum);
    return;
  };

  const nextPicture = () => {
    const pictureNum = (actualPictNum + 1) % props.imgSrcAndId.length;
    setActualPictNum(pictureNum);
    return;
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevPicture}></button>
      <div className="image-container">{currentPicture}</div>
      <button className="next" onClick={nextPicture}></button>
      <div className="dot">OOOOOOOOO</div>
    </div>
  );
}

const ImageSlide = ({ url, alt, id }) => {
  return (
    <Link to={`pic/${id}`}>
      <img className="image-carousel" src={url} id={id} alt={alt} />
    </Link>
  );
};

export default Carousel;
