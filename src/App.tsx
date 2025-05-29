import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <HeroSection /> */}
      <Header />
      <Services />
    </>
  );
}

export default App;
