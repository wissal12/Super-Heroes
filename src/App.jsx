import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import NavBar from "./components/NavBar";
import Heroes from "./pages/Heroes";
import HeroDetails from "./pages/HeroDetails";
import Favourites from "./pages/Favourites";
import { GlobalStyle } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <NavBar />
        <Routes>
          <Route path={ROUTES.HEROES} element={<Heroes />} />
          <Route path={ROUTES.HERO_DETAILS} element={<HeroDetails />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
          <Route path="/*" element={<Navigate replace to={ROUTES.HEROES} />} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;
