import { Child } from "./styles";
import { mappingName } from "../SuggestInput/type";
export default function ChildNode({ item }) {
  return (
    <Child>
      <div className="left">{item.titleName}</div>
      <div className="right">
        {item.content.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </Child>
  );
}
