import { useState, useEffect } from "react";

function Carousel(props) {
  const [actualPictNum, setActualPictNum] = useState(0);
  const [currentPicture, setCurrentPicture] = useState();

  // Change the ImageSlide displayed following the position in the array of image src
  useEffect(() => {
    const imgUrl = props.imgSrc[actualPictNum];
    setCurrentPicture(<ImageSlide url={`${imgUrl}`} />);
  }, [actualPictNum]);

  const prevPicture = () => {
    let pictureNum = (actualPictNum - 1) % props.imgSrc.length;
    if (pictureNum < 0) {
      pictureNum = props.imgSrc.length - 1;
    }
    console.log(pictureNum);
    setActualPictNum(pictureNum);
    return;
  };

  const nextPicture = () => {
    const pictureNum = (actualPictNum + 1) % props.imgSrc.length;
    setActualPictNum(pictureNum);
    return;
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevPicture}>
        Prev
      </button>
      <div className="image-container">{currentPicture}</div>
      <button class="next" onClick={nextPicture}>
        Next
      </button>
    </div>
  );
}

const ImageSlide = ({ url, alt, id }) => {
  return <img className="image-carousel" src={url} id={id} alt={alt} />;
};

export default Carousel;
