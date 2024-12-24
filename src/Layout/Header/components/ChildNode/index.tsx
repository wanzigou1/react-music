import { Child } from "./styles";
import { mappingName } from "../SuggestInput/type";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChildNode({ item }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // 动态加载图片
    const loadImage = async () => {
      try {
        const image = await import(`@/assets/${item.titleName}_icon.png`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Image loading error: ", error);
      }
    };

    loadImage();
  }, [item.titleName]);
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/song?id=${item.id}`);
  };
  return (
    <Child>
      <div className="left">
        {imageSrc && <img src={imageSrc} alt={item.titleName} />}
        {mappingName[item.titleName]}
      </div>
      <div className="right">
        {item.content.map((contentItem, index) => (
          <div key={index} onClick={() => handleClick(contentItem)}>
            {contentItem.showText}
          </div>
        ))}
      </div>
    </Child>
  );
}
