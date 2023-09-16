import React, { useState, useEffect } from "react";
import FilledInfoCard from "../Cards/FilledInfoCard";

function FoodAndCloth() {
  const [foodAndClothData, setFoodAndClothData] = useState({
    dairy: 0,
    meat: 0,
    fruitAndVeg: 0,
    wine: 0,
    other: 0,
    clothing: 0,
    tempDairy: 0,
    tempMeat: 0,
    tempFruitAndVeg: 0,
    tempWine: 0,
    tempOther: 0,
    tempClothing: 0,
  });

  useEffect(() => {
    console.log(localStorage.getItem("period"));
  }, []);

  const handleChange = (field, value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setFoodAndClothData({
        ...foodAndClothData,
        [field]: value,
      });
    } else {
      setFoodAndClothData({
        ...foodAndClothData,
        [`temp${field}`]: 0,
      });
    }
  };

  const handleTempChange = (field, value) => {
    setFoodAndClothData({
      ...foodAndClothData,
      [`temp${field}`]: value,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="text-center text-2xl font-semibold pt-20 fontColor">
        <h1 variant="h1">FOOD & CLOTHING</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-10">
        <div className="w-full md:w-1/2 lg:w-1/3 mr-4">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Dairy"
            description=""
            action={{
              func: (value) => handleChange("dairy", value),
              funcT: (value) => handleTempChange("Dairy", value),
              unit: "inr",
              value: foodAndClothData.tempDairy,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Meat"
            description=""
            action={{
              func: (value) => handleChange("meat", value),
              funcT: (value) => handleTempChange("Meat", value),
              unit: "inr",
              value: foodAndClothData.tempMeat,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mr-4">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Fruit & Veg"
            description=""
            action={{
              func: (value) => handleChange("fruitAndVeg", value),
              funcT: (value) => handleTempChange("FruitAndVeg", value),
              unit: "inr",
              value: foodAndClothData.tempFruitAndVeg,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Wine"
            description=""
            action={{
              func: (value) => handleChange("wine", value),
              funcT: (value) => handleTempChange("Wine", value),
              unit: "inr",
              value: foodAndClothData.tempWine,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mr-4">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Other Food"
            description=""
            action={{
              func: (value) => handleChange("other", value),
              funcT: (value) => handleTempChange("Other", value),
              unit: "inr",
              value: foodAndClothData.tempOther,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <FilledInfoCard
            variant="gradient"
            color="success"
            title="Clothing"
            description=""
            action={{
              func: (value) => handleChange("clothing", value),
              funcT: (value) => handleTempChange("Clothing", value),
              unit: "inr",
              value: foodAndClothData.tempClothing,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-green-800"
          onClick={() => {
            localStorage.setItem("dairy", foodAndClothData.dairy);
            localStorage.setItem("meat", foodAndClothData.meat);
            localStorage.setItem("fruitAndVeg", foodAndClothData.fruitAndVeg);
            localStorage.setItem("wine", foodAndClothData.wine);
            localStorage.setItem("other", foodAndClothData.other);
            localStorage.setItem("clothing", foodAndClothData.clothing);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default FoodAndCloth;
