import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
