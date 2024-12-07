import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { getBanner } from "@/api";
import { BannerStyles } from "./index.styles";
export default function Banner() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner().then((res: any) => {
      setBanner(res.banners);
    });
  }, []);
  const handleDown = () => {
    navigate("/download");
  };
  return (
    <>
      <BannerStyles>
        <Carousel
          arrows
          infinite
          autoplay
          autoplaySpeed={5000}
          fade
          speed={2000}
        >
          {banner.map((item: any) => (
            <div key={item.imageUrl}>
              <div
                className="banner"
                style={{
                  background: `url(${item.imageUrl}?imageView&blur=40x20&quot;)`,
                  backgroundSize: "6000px",
                  backgroundPosition: "center center",
                }}
              >
                <img src={item.imageUrl} alt="" />
                <div className="download" onClick={handleDown}></div>
              </div>
            </div>
          ))}
        </Carousel>
      </BannerStyles>
    </>
  );
}
