import { useState, useEffect } from "react";
import CarComponent from "../../components/Cars";
import CarsData from "../../mocks/cars-data.json";
import { ICars } from "../../services/cars/interface";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(CarsData);
  }, []);

  return (
    <div className="cars-page">
      <CarComponent cars={cars} />
    </div>
  );
};

export default Cars;
