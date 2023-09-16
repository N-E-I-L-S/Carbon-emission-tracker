import React, { Component } from "react";
import FilledInfoCard from "../Cards/FilledInfoCard";
import Navbar from "../Landing Page/Navbar";

class Transportation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: 0,
      bus: 0,
      subway: 0,
      airplane: 0,
      intercityTrain: 0,
      tempCar: 0,
      tempBus: 0,
      tempSubway: 0,
      tempAirplane: 0,
      tempIntercityTrain: 0,
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("period"));
  }

  changeCar = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ car: value });
    } else {
      this.setState({ tempCar: 0 });
    }
    console.log(this.state.car);
  };

  changeTempCar = (value) => {
    this.setState({ tempCar: value });
  };

  changeBus = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ bus: value });
    } else {
      this.setState({ tempBus: 0 });
    }
  };

  changeTempBus = (value) => {
    this.setState({ tempBus: value });
  };

  changeSubway = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ subway: value });
    } else {
      this.setState({ tempSubway: 0 });
    }
  };

  changeTempSubway = (value) => {
    this.setState({ tempSubway: value });
  };

  changeAirplane = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ airplane: value });
    } else {
      this.setState({ tempAirplane: 0 });
    }
  };

  changeTempAirplane = (value) => {
    this.setState({ tempAirplane: value });
  };

  changeIntercityTrain = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ intercityTrain: value });
    } else {
      this.setState({ tempIntercityTrain: 0 });
    }
  };

  changeTempIntercityTrain = (value) => {
    this.setState({ tempIntercityTrain: value });
  };

  backgroundStyle = {
    backgroundImage: `url(https://springpack.co.uk/app/uploads/2021/11/still-life-sustainable-lifestyle-elements-composition-scaled.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Optional, to fix the background
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container mx-auto pt-10">
          <div className="text-center text-2xl font-semibold pt-20 fontColor">
            <h3 variant="h1">TRANSPORTATION</h3>
          </div>
          <div className="pt-10 flex flex-wrap justify-center gap-10">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="info"
                //icon={<FontAwesomeIcon icon={faCar} />}
                title="Car"
                description=""
                action={{
                  func: this.changeCar,
                  funcT: this.changeTempCar,
                  unit: "km",
                  value: this.state.tempCar,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faBus} />}
                title="Bus"
                description=""
                action={{
                  func: this.changeBus,
                  funcT: this.changeTempBus,
                  unit: "km",
                  value: this.state.tempBus,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faSubway} />}
                title="Metro"
                description=""
                action={{
                  func: this.changeSubway,
                  funcT: this.changeTempSubway,
                  unit: "km",
                  value: this.state.tempSubway,
                }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faPlane} />}
                title="Local"
                description=" "
                action={{
                  func: this.changeAirplane,
                  funcT: this.changeTempAirplane,
                  unit: "km",
                  value: this.state.tempAirplane,
                }}
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-green-800"
              onClick={() => {
                localStorage.setItem("car", this.state.car);
                localStorage.setItem("bus", this.state.bus);
                localStorage.setItem("subway", this.state.subway);
                localStorage.setItem("airplane", this.state.airplane);
                localStorage.setItem(
                  "intercityTrain",
                  this.state.intercityTrain
                );
              }}
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Transportation;
