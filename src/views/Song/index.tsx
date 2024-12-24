import { useLocation } from "react-router-dom";
import { getLyric } from "@/api";
import { useEffect, useState } from "react";
export default function Song() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [lyrics, setLyrics] = useState([]);
  useEffect(() => {
    getLyric({ id }).then((res: any) => {
      setLyrics(parseLyrics(res.lrc.lyric));
    });
  }, []);
  // 解析歌词
  const parseLyrics = (lyrics) => {
    const regex = /\[(\d{2}):(\d{2})\.(\d{3})\](.*?)\n/g;
    const parsed = [];
    let match;

    while ((match = regex.exec(lyrics)) !== null) {
      const [, minutes, seconds, milliseconds, text] = match;
      const time =
        parseInt(minutes) * 60 +
        parseInt(seconds) +
        parseInt(milliseconds) / 1000;
      parsed.push({
        time,
        text: text.trim(),
      });
    }

    return parsed;
  };
  return (
    <div>
      <ul>
        {lyrics.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
