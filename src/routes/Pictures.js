import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import uniqid from "uniqid";
const axios = require("axios");

function Pictures(props) {
  const [imagesObjectArray, setImagesObjectArray] = useState([]);

  const getDatas = () => {
    axios.get("http://localhost:8080/images").then((res) => {
      setImagesObjectArray(res.data);
    });
  };

  const deletePicture = (id) => {
    // Delete post with given id from DB
    axios.delete(`http://localhost:8080/images/${id}`);

    // Delete the same post from local variable
    const newArray = imagesObjectArray.filter((el) => {
      return el.id !== id;
    });
    setImagesObjectArray(newArray);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const createLinksTopictures = () => {
    return imagesObjectArray.map((imageimageInfos) => {
      return (
        <li key={uniqid()}>
          <Link to={`/pic/${imageimageInfos.id}`}>{imageimageInfos.title}</Link>{" "}
          <button onClick={() => deletePicture(imageimageInfos.id)}>x</button>
        </li>
      );
    });
  };
  return (
    <div className="pictures">
      <ul>{createLinksTopictures()}</ul>
    </div>
  );
}

export default Pictures;
