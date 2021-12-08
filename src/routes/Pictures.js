import { Link } from "react-router-dom";

const datas = require("../assets/datas.json");

function Pictures(props) {
  const imagesObjectArray = datas.images;

  const createLinksTopictures = () => {
    return imagesObjectArray.map((imageimageInfos) => {
      return (
        <li>
          <Link to={`/pic/${imageimageInfos.id}`}>{imageimageInfos.title}</Link>
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
