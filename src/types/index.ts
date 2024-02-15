export type ButtonPropsType = {
  disabled?: boolean;
  designs?: string;
  btnType?: "submit" | "reset" | "button";
  title: string;
};

//apiden gelen araç verisinin tipi
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
