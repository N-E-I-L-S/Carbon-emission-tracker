import React, { Component } from "react";
import FilledInfoCard from "./Cards/FilledInfoCard";

class RestaurantAndAccommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 0,
      hotel: 0,
      tempRestaurant: 0,
      tempHotel: 0,
    };
  }

  changeRestaurant = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ restaurant: value });
    } else {
      this.setState({ tempRestaurant: 0 });
    }
  };

  changeTempRestaurant = (value) => {
    this.setState({ tempRestaurant: value });
  };

  changeHotel = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ hotel: value });
    } else {
      this.setState({ tempHotel: 0 });
    }
  };

  changeTempHotel = (value) => {
    this.setState({ tempHotel: value });
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="text-center mt-10 mb-10">
          <h1 className="text-3xl">Restaurant & Accommodation</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FilledInfoCard
              variant="gradient"
              color="success"
              // icon={<FontAwesomeIcon icon={faUtensils} />}
              title="Restaurant"
              description=""
              action={{
                func: this.changeRestaurant,
                funcT: this.changeTempRestaurant,
                unit: "usd",
                value: this.state.tempRestaurant,
              }}
            />
          </div>
          <div className="col-span-1">
            <FilledInfoCard
              variant="gradient"
              color="success"
              // icon={<FontAwesomeIcon icon={faHotel} />}
              title="Hotel"
              description=""
              action={{
                func: this.changeHotel,
                funcT: this.changeTempHotel,
                unit: "night",
                value: this.state.tempHotel,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            onClick={() => {
                localStorage.setItem("restaurant", this.state.restaurant);
                localStorage.setItem("hotel", this.state.hotel);

                window.location.href = "/result";
              }}
            >
            Submit & View Total carbon footprint
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantAndAccommodation;
