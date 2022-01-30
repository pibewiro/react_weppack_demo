import React from "react";
import { ICars } from "../../services/cars/interface";
import Card from "../Card";

interface IProps {
  cars: ICars[];
}
const CarComponent = (props: IProps) => {
  return (
    <>
      {props.cars.map((car) => (
        <Card car={car} />
      ))}
    </>
  );
};

export default CarComponent;
