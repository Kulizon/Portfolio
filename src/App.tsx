import { Route, Routes } from "react-router";
import React from "react";

import CallToAction from "./components/Main/CallToAction/CallToAction";
import AboutMe from "./components/Main/AboutMe/AboutMe";
import Portfolio from "./components/Main/Portfolio/Portfolio";
// import ClientZone from "./components/Main/ClientZone/ClientZone";
// import Advantages from "./components/Main/Advantages/Advantages";
// import Offer from "./components/Main/Offer/Offer";
// import WebsiteTypes from "./components/Main/WebsiteTypes/WebsiteTypes";
// import CommercialPortfolio from "./components/Main/CommercialPortfolio/CommercialPortfolio";
import Contact from "./components/Main/Contact/Contact";

import Menu from "./components/Menu/Menu";
import Button from "./components/UI/Button/Button";

import "./App.scss";
import wave from "./assets/images/other/wave.svg";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu></Menu>
              <main>
                <CallToAction></CallToAction>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
                {/* <ClientZone></ClientZone>
                <Advantages></Advantages>
                <Offer></Offer>
                <WebsiteTypes></WebsiteTypes>
                <CommercialPortfolio></CommercialPortfolio> */}
                <Contact></Contact>
              </main>
            </>
          }
        ></Route>
        <Route
          path="*"
          element={
            <main className="error404">
              <div>
                <div></div>
                <img src={wave} alt="Tło" />
              </div>

              <div>
                <h1>Błąd 404</h1>
                <h2>Ups! Nie znaleziono takiej strony...</h2>
                <p>Ale zawsze możesz wrócić na stronę główną!</p>
                <Button link="/">Strona Główna</Button>
              </div>
            </main>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
