import React from "react";
import { ICars } from "../../services/cars/interface";

interface IProps {
  car: ICars;
}

const Card = (props: IProps) => {
  return (
    <div key={props.car.id} className="card">
      <h1>
        {props.car.make} {props.car.model}
      </h1>
      <h2>{props.car.year}</h2>
      <h2>{props.car.price}</h2>
    </div>
  );
};

export default Card;
