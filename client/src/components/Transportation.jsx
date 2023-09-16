import React, { Component } from "react";
import FilledInfoCard from "./Cards/FilledInfoCard";

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

  render() {
    return (
      <>
          <div className="container mx-auto">
            <div className="text-center mt-10 mb-10">
              <h3 variant="h1">Transportation</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FilledInfoCard
                variant="gradient"
                color="info"
                //icon={<FontAwesomeIcon icon={faCar} />}
                title="Car"
                description=""
                action={{
                  func: this.changeCar,
                  funcT: this.changeTempCar,
                  unit: "miles",
                  value: this.state.tempCar,
                }}
              />
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faBus} />}
                title="Bus"
                description=""
                action={{
                  func: this.changeBus,
                  funcT: this.changeTempBus,
                  unit: "miles",
                  value: this.state.tempBus,
                }}
              />
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faSubway} />}
                title="Subway"
                description=""
                action={{
                  func: this.changeSubway,
                  funcT: this.changeTempSubway,
                  unit: "miles",
                  value: this.state.tempSubway,
                }}
              />
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faPlane} />}
                title="Airplane"
                description=" "
                action={{
                  func: this.changeAirplane,
                  funcT: this.changeTempAirplane,
                  unit: "miles",
                  value: this.state.tempAirplane,
                }}
              />
              <FilledInfoCard
                variant="gradient"
                color="success"
                //icon={<FontAwesomeIcon icon={faTrain} />}
                title="Intercity Train"
                description=""
                action={{
                  func: this.changeIntercityTrain,
                  funcT: this.changeTempIntercityTrain,
                  unit: "miles",
                  value: this.state.tempIntercityTrain,
                }}
              />
            </div>
            <div className="flex justify-center mt-5">
                <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                onClick={() => {
                    localStorage.setItem("car", this.state.car);
                    localStorage.setItem("bus", this.state.bus);
                    localStorage.setItem("subway", this.state.subway);
                    localStorage.setItem("airplane", this.state.airplane);
                    localStorage.setItem("intercityTrain", this.state.intercityTrain);
                    window.location.href = "/utilities";
                }}
                >
                Next: Transportation
                </button>
            </div>
          </div>

      </>
    );
  }
}

export default Transportation;
