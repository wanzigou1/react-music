import { useState, useCallback } from "react";
import { getSuggest } from "@/api";
import { Input, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import _ from "lodash";
import { ContentStyles } from "./index.styles";
import { handleRes } from "./type";
import Child from "../ChildNode/index";
// 定义接口类型，确保类型安全

export default function SuggestInput() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<handleRes[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  // 防抖搜索
  const debouncedQuery = useCallback(
    _.debounce((keywords: string) => {
      if (!keywords.trim()) {
        setIsFocus(false);
        return;
      }
      setIsFocus(true);
      getSuggest({ keywords }).then((res) => {
        setResult(handleResult(res));
      });
    }, 300),
    []
  );

  // 处理输入变化，并触发防抖请求
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedQuery(e.target.value); // 传入最新的 searchValue
  };
  //  处理搜索结果
  const handleResult = (data) => {
    return data.order.map((item) => {
      return {
        titleName: item,
        content: data[item].map(
          (item) =>
            item.name + ((item.artists && "-" + item.artists[0]?.name) || "")
        ),
      };
    });
  };
  return (
    <ContentStyles>
      <Input
        onFocus={() => searchValue && setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={searchValue}
        onChange={handleQuery}
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
      />
      <div className={`card ${isFocus ? "" : "hide"}`}>
        <ul className="box">
          {result.map((item, index) => (
            <Child item={item} key={index}></Child>
          ))}
        </ul>
      </div>
    </ContentStyles>
  );
}
