//temel url: https://cdn.imagin.studio/getimage
//dinamik olarak elde edeceğimiz sonuc
//https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3

import { colors } from "../constants";
import { CarType } from "../types";

export const generateImage = (car: CarType, angle?: string): string => {
  const url: URL = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fulscreen");
  //açı varsa açıyı ekler
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const idx = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[idx]);

  //oluşturduğumuz url i fonksiyonun çağırıldığı yere döndür
  return url.href;
};
