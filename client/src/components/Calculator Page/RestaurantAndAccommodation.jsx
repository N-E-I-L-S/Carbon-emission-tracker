import React, { Component } from "react";
import FilledInfoCard from "../Cards/FilledInfoCard";

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
      <div className="container mx-auto pt-10">
        <div className="text-center text-2xl font-semibold pt-20 fontColor">
          <h1 variant="h1">RESTAURANT & ACCOMMODATIONS</h1>
        </div>
        <div className="flex justify-center gap-4 pt-10">
          <div>
            <FilledInfoCard
              variant="gradient"
              color="success"
              title="Restaurant"
              description=""
              action={{
                func: this.changeRestaurant,
                funcT: this.changeTempRestaurant,
                unit: "inr",
                value: this.state.tempRestaurant,
              }}
            />
          </div>
          <div>
            <FilledInfoCard
              variant="gradient"
              color="success"
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
        <div className="flex justify-center mt-10">
          <button
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-green-800"
            onClick={() => {
              localStorage.setItem("restaurant", this.state.restaurant);
              localStorage.setItem("hotel", this.state.hotel);

              window.location.href = "/result";
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantAndAccommodation;
