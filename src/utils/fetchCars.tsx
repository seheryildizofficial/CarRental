const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08e43dce96msheeeda330a374c55p16fab4jsn908e17c568f7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};
export interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
}
export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  //varsayılan değer tanımlandı
  const {
    make = "bmw",
    model = "m3",
    limit = "5",
    fuel_type = "",
    year = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,
    options
  );
  const data = await res.json();
  return data;
}
