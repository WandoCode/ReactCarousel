import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

function Carousel(props) {
  const [actualPictNum, setActualPictNum] = useState(0);
  const [currentPicture, setCurrentPicture] = useState();
  const [automaticSlide, setAutomaticSlide] = useState(props.automaticSlide);
  const [seconds, setSeconds] = useState(0);

  // Change the ImageSlide displayed following the position in the array of image src
  useEffect(() => {
    // If no picture, nothing to do
    if (props.imgSrcAndId.length === 0) return;
    // Set a new picture in the carousel
    const imgUrl = props.imgSrcAndId[actualPictNum];
    setCurrentPicture(
      <ImageSlide
        url={`${imgUrl.url}`}
        id={`${imgUrl.id}`}
        alt={`${imgUrl.title}`}
      />
    );
  }, [actualPictNum, props.imgSrcAndId]);

  // Ask to show the previous picture in the carousel
  const prevPicture = () => {
    let pictureNum = (actualPictNum - 1) % props.imgSrcAndId.length;
    if (pictureNum < 0) {
      pictureNum = props.imgSrcAndId.length - 1;
    }
    setActualPictNum(pictureNum);
    setSeconds(0);
    return;
  };

  // Ask to show the next picture in the carousel
  const nextPicture = () => {
    const pictureNum = (actualPictNum + 1) % props.imgSrcAndId.length;
    setActualPictNum(pictureNum);
    setSeconds(0);
    return;
  };

  /* AUTOMATIC SLIDING */
  // Increment seconds every second if asked.
  useEffect(() => {
    let interval = null;
    if (automaticSlide) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!automaticSlide && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [automaticSlide, seconds]);

  // Every given interval, show the next picture
  useEffect(() => {
    let delaySlide;
    if (props.delay >= 1) {
      delaySlide = props.delay;
    } else {
      delaySlide = 5;
    }
    if (seconds === props.delay && automaticSlide) {
      nextPicture();
    }
  }, [seconds]);

  /* RENDERING */
  return (
    <div className="carousel">
      <button className="prev" onClick={prevPicture}></button>
      <div className="image-container">{currentPicture}</div>
      <button className="next" onClick={nextPicture}></button>
      <DotPicturesComp
        maxDot={props.imgSrcAndId.length}
        currentDot={actualPictNum}
      />
    </div>
  );
}

/* HLEPERS */
const ImageSlide = ({ url, alt, id }) => {
  return (
    <Link to={`pic/${id}`}>
      <img className="image-carousel" src={url} id={id} alt={alt} />
    </Link>
  );
};

const DotPicturesComp = ({ maxDot, currentDot }) => {
  let dot = [];
  for (let i = 0; i < maxDot; i++) {
    if (i === currentDot) {
      dot[i] = <img src="./images/black_dot.png" key={uniqid()} />;
      continue;
    }
    dot[i] = <img src="./images/white_dot.png" key={uniqid()} />;
  }
  return <div className="dot">{dot}</div>;
};

export default Carousel;
