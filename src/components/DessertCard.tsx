import React from "react";
import { DessertCardType } from "../types/ComponentTypes";
import CardButton from "./CardButton";

const DessertCard = ({ image, category, name, price }: DessertCardType) => {
  return (
  
      <div className="flex flex-col mt-10">
        <div className="relative flex flex-col items-center">
          <img src={image} alt={name} className="w-64 h-64 rounded-lg" />

          {/* Button, absolutely positioned over the image */}
          <div className="absolute bottom-0 transform translate-y-1/2">
            <CardButton />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-6 pl-20">
          <h2 className="text-md font-light">{category}</h2>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <h3 className="text-lg font-bold">${price.toFixed(2)}</h3>
        </div>
    
      </div>

      );
};

export default DessertCard;
