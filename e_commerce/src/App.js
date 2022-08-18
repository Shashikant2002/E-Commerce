import { useEffect } from "react";
import webFont from "webfontloader";
import "./App.css";
import Header from "./component/layout/header/Header";

function App() {
    useEffect(() => {
      webFont.load({
        google: {
          families: ["Ubuntu", "Roboto", "sans-serif"],
        },
      });
    }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
