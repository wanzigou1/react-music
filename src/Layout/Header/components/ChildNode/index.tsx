import { Child } from "./styles";
import { mappingName } from "../SuggestInput/type";
import { useState, useEffect } from "react";

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

  return (
    <Child>
      <div className="left">
        {imageSrc && <img src={imageSrc} alt={item.titleName} />}
        {mappingName[item.titleName]}
      </div>
      <div className="right">
        {item.content.map((contentItem, index) => (
          <div key={index}>{contentItem}</div>
        ))}
      </div>
    </Child>
  );
}
