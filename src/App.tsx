import Layout from "./Layout";
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
      <Layout></Layout>
    </>
  );
}

export default App;
