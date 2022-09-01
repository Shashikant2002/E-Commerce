import { useEffect } from "react";
import webFont from "webfontloader";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import Home from "./component/home/Home";
import PrpductSingle from "./component/product/PrpductSingle";
import Prpducts from "./component/product/Prpducts";
import Search from "./component/product/Search.js";

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
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<PrpductSingle />} />
          <Route path="/product" element={<Prpducts />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
