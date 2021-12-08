import { useParams } from "react-router-dom";

const datas = require("../assets/datas.json");

function ShowPic(props) {
  const id = useParams().id;

  const imagesObjectArray = datas.images;

  const imagesObject = imagesObjectArray.find((imageInfos) => {
    return imageInfos.id === id;
  });

  return (
    <div className="show-pic">
      <img
        src={imagesObject.url}
        id={imagesObject.id}
        alt={imagesObject.title}
      />
    </div>
  );
}

export default ShowPic;
