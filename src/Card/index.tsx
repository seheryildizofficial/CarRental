import React from "react";
import { CarType } from "../types";
import CustomButton from "../components/CustomButton";
interface ICardProps {
  car: CarType;
}
const Card = ({ car }: ICardProps) => {
  const translate = {
    fwd: "Önden çeker",
    rwd: "Arkadan çeker",
    "4wd": "4 çeker",
    awd: "4 çeker",
  };
  return (
    <div className="car-card group">
      {/**araba ismi */}
      <h2 className="car-card__content-title">
        {car.make}
        {car.model}
      </h2>

      {/** araba fiyatı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="text-[19px] self-end font-semibold">/gün</span>
      </p>

      {/**resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img src="/public/hero.png" />
      </div>

      {/**alt kısım */}
      <div className="relative flex w-full mt-2">
        {/**ikonlar */}
        <div className="group-hover:hidden flex w-full justify-between">
          <div className="flex-center flex-col">
            <img width={25} src="/public/steering-wheel.svg" />
            <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
          </div>

          <div className="flex-center flex-col">
            <img width={25} src="/public/tire.svg" />
            <p>{translate[car.drive]}</p>
          </div>

          <div>
            <img width={25} src="/public/gas.svg" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        {/**buton */}
        <div className="group-hover:flex hidden w-full">
          <CustomButton title="Daha Fazla" designs="w-full py-[16px]" />
        </div>
      </div>
      {/**model */}
    </div>
  );
};

export default Card;
