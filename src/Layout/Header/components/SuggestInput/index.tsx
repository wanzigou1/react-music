import { useState, useCallback } from "react";
import { getSuggest } from "@/api";
import { Input, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import _ from "lodash";
import { ContentStyles } from "./index.styles";
import { SuggestResult } from "./index.type";
// 定义接口类型，确保类型安全

export default function SuggestInput() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<SuggestResult>({}); // 初始化为空对象
  const [isFocus, setIsFocus] = useState(false);

  // 防抖搜索
  const debouncedQuery = useCallback(
    _.debounce((keywords: string) => {
      if (!keywords.trim()) return;
      getSuggest({ keywords }).then((res) => {
        setResult(res);
      });
    }, 1000),
    []
  );

  // 处理输入变化，并触发防抖请求
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedQuery(e.target.value); // 传入最新的 searchValue
  };

  return (
    <ContentStyles>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={searchValue}
        onChange={handleQuery}
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
      />
      <div className={`card ${isFocus ? "" : "hide"}`}>
        <ul className="box">
          {result.order.map((item, index) => (
            <li className="item" key={index}>
              <div className="left">{item}</div>
              <div className="right">right</div>
            </li>
          ))}
        </ul>
      </div>
    </ContentStyles>
  );
}
