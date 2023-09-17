import React, { Component } from "react";
import FilledInfoCard from "../Cards/FilledInfoCard";
import Navbar from "../Landing Page/Navbar";

class SetGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 0,
      food: 0,
      transport: 0,
      utils: 0,
      tempRestaurant: 0,
      tempFood: 0,
      tempTransport: 0,
      tempUtils: 0,
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("period"));
  }

  changeRestaurant = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ restaurant: value });
    } else {
      this.setState({ tempRestaurant: 0 });
    }
    console.log(this.state.restaurant);
  };

  changeTempRestaurant = (value) => {
    this.setState({ tempRestaurant: value });
  };

  changeFood = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ food: value });
    } else {
      this.setState({ tempFood: 0 });
    }
  };

  changeTempFood = (value) => {
    this.setState({ tempFood: value });
  };

  changeTransport = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ transport: value });
    } else {
      this.setState({ tempTransport: 0 });
    }
  };

  changeTempTransport = (value) => {
    this.setState({ tempTransport: value });
  };

  changeUtils = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ utils: value });
    } else {
      this.setState({ tempUtils: 0 });
    }
  };

  changeTempUtils = (value) => {
    this.setState({ tempUtils: value });
  };

  backgroundStyle = {
    backgroundImage: `url(https://springpack.co.uk/app/uploads/2021/11/still-life-sustainable-lifestyle-elements-composition-scaled.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
    width: "100%", // Set container width to 100%
    height: "100vh", // Set container height to 100% of viewport height
  };

  render() {
    return (
      <>
        <Navbar />
        <div style={this.backgroundStyle}  className="container mx-auto pt-10">
          <div className="text-center text-2xl font-semibold pt-20 fontColor">
            <h3 variant="h1">SET YOUR GOALS !!!</h3>
          </div>
          <div className="pt-10 flex flex-wrap justify-center gap-10">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="info"
                //icon={<FontAwesomeIcon icon={faCar} />}
                title="Restaurants & Accommodations"
                description=""
                action={{
                  func: this.changeRestaurant,
                  funcT: this.changeTempRestaurant,
                  unit: "kg CO2e",
                  value: this.state.tempRestaurant,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faBus} />}
                title="Food & Clothing"
                description=""
                action={{
                  func: this.changeFood,
                  funcT: this.changeTempFood,
                  unit: "kg CO2e",
                  value: this.state.tempFood,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faSubway} />}
                title="Transportation"
                description=""
                action={{
                  func: this.changeTransport,
                  funcT: this.changeTempTransport,
                  unit: "kg CO2e",
                  value: this.state.tempTransport,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faPlane} />}
                title="Utilities"
                description=" "
                action={{
                  func: this.changeUtils,
                  funcT: this.changeTempUtils,
                  unit: "kg CO2e",
                  value: this.state.tempUtils,
                }}
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
              onClick={() => {
                localStorage.setItem("restaurant", this.state.restaurant);
                localStorage.setItem("food", this.state.food);
                localStorage.setItem("transportation", this.state.transport);
                localStorage.setItem("utils", this.state.utils);

                window.location.href = "/fill-details"
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SetGoals;
