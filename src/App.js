import React from "react";
import "./css/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function MyApp() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
