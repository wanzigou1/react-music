import Header from "./views/Header";
import Content from "./views/Content";
import Footer from "./views/Footer";
import { registerMicroApps, start } from "qiankun";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    registerMicroApps([
      {
        name: "nodeApp", // app name registered
        entry: "//localhost:3000",
        container: "#micro-container",
        activeRule: "/my",
        props: {
          shadowDOM: true, // 开启样式隔离
        },
      },
    ]);
    start();
  }, []);
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
