import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../CustomFilter";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Card from "../Card";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [params] = useSearchParams();
  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);
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
            <CustomFilter
              paramName={"fuel_type"}
              title="Yakıt Tipi"
              options={fuels}
            />
            <CustomFilter
              paramName={"year"}
              title="Üretim Yılı"
              options={years}
            />
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
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
