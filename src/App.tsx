import React from "react";
import DessertCard from "./components/DessertCard";
import data from "./data/data.json";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="bg-rose-50 p-10">
      <h1 className="text-7xl ml-40 font-bold">Desserts</h1>
      <div className="flex justify-center">

      <div className="grid grid-cols-3 bg-transparent">
      {data.map((dessert) => {
        return (
          <DessertCard
            key={dessert.name}
            image={dessert.image.desktop}
            category={dessert.category}
            name={dessert.name}
            price={dessert.price}
          />
        );
      })}

      </div>
      

      <div className="w-1/4 ">

      <Cart />
      </div>
      </div>
    </div>
  );
}

export default App;
