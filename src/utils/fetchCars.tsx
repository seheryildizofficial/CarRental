const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08e43dce96msheeeda330a374c55p16fab4jsn908e17c568f7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars(): Promise<CarType[]> {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    options
  );
  const data = await res.json();
  return data;
}
