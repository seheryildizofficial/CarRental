import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../CustomFilter";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Card from "../Card";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/**filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        {/**araba listesi*/}
        {!cars ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>üzgünüz verileri alırken hata oluştu</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aradığınız kritere uygun araba bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
