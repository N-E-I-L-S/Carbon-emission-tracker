import React, { useState, useEffect } from "react";
import FilledInfoCard from "./Cards/FilledInfoCard";


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
      <div className="text-center mt-10 mb-10">
        <h1 className="text-3xl">Food & Clothing</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<FontAwesomeIcon icon={faCow} />}
            title="Dairy"
            description=""
            action={{
              func: (value) => handleChange("dairy", value),
              funcT: (value) => handleTempChange("Dairy", value),
              unit: "usd",
              value: foodAndClothData.tempDairy,
            }}
          />
        </div>
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<KebabDiningIcon />}
            title="Meat"
            description=""
            action={{
              func: (value) => handleChange("meat", value),
              funcT: (value) => handleTempChange("Meat", value),
              unit: "usd",
              value: foodAndClothData.tempMeat,
            }}
          />
        </div>
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<FontAwesomeIcon icon={faCarrot} />}
            title="Fruit & Veg"
            description=""
            action={{
              func: (value) => handleChange("fruitAndVeg", value),
              funcT: (value) => handleTempChange("FruitAndVeg", value),
              unit: "usd",
              value: foodAndClothData.tempFruitAndVeg,
            }}
          />
        </div>
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<FontAwesomeIcon icon={faWineBottle} />}
            title="Wine"
            description=""
            action={{
              func: (value) => handleChange("wine", value),
              funcT: (value) => handleTempChange("Wine", value),
              unit: "usd",
              value: foodAndClothData.tempWine,
            }}
          />
        </div>
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<FontAwesomeIcon icon={faBowlRice} />}
            title="Other Food"
            description=""
            action={{
              func: (value) => handleChange("other", value),
              funcT: (value) => handleTempChange("Other", value),
              unit: "usd",
              value: foodAndClothData.tempOther,
            }}
          />
        </div>
        <div className="col-span-1">
          <FilledInfoCard
            variant="gradient"
            color="success"
            //icon={<FontAwesomeIcon icon={faShirt} />}
            title="Clothing"
            description=""
            action={{
              func: (value) => handleChange("clothing", value),
              funcT: (value) => handleTempChange("Clothing", value),
              unit: "usd",
              value: foodAndClothData.tempClothing,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            onClick={() => {
                localStorage.setItem("dairy", foodAndClothData.dairy);
                localStorage.setItem("meat", foodAndClothData.meat);
                localStorage.setItem("fruitAndVeg", foodAndClothData.fruitAndVeg);
                localStorage.setItem("wine", foodAndClothData.wine);
                localStorage.setItem("other", foodAndClothData.other);
                localStorage.setItem("clothing", foodAndClothData.clothing);
                window.location.href = "/restaurantAndAccommodation";
              }}
            >
            Next: Restaurant & Accommodation
          </button>
        </div>
    </div>
  );
}

export default FoodAndCloth;
