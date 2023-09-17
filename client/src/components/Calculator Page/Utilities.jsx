import React, { Component } from "react";
import FilledInfoCard from "../Cards/FilledInfoCard";

class Utilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gas: 0,
      water: 0,
      electricity: 0,
      tempGas: 0,
      tempWater: 0,
      tempElectricity: 0,
    };
  }

  changeGas = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ gas: value });
    } else {
      this.setState({ tempGas: 0 });
    }
    console.log(this.state.gas);
  };

  changeTempGas = (value) => {
    this.setState({ tempGas: value });
  };

  changeWater = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ water: value });
    } else {
      this.setState({ tempWater: 0 });
    }
  };

  changeTempWater = (value) => {
    this.setState({ tempWater: value });
  };

  changeElectricity = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ electricity: value });
    } else {
      this.setState({ tempElectricity: 0 });
    }
  };

  changeTempElectricity = (value) => {
    this.setState({ tempElectricity: value });
  };

  render() {
    return (
      <div className="container mx-auto text-center mt-10">
        <div className="text-center text-2xl font-semibold pt-20 fontColor">
            <h3 variant="h1">UTILITIES</h3>
        </div>
        <div className="flex justify-center mt-5 pt-10">
          <div className="flex justify-between">
            <div className="mr-8">
              <FilledInfoCard
                variant="gradient"
                color="success"
                icon={<i className="material-icons-round text-xl">bolt</i>}
                title="Electricity"
                description=""
                action={{
                  func: this.changeElectricity,
                  funcT: this.changeTempElectricity,
                  unit: "inr",
                  value: this.state.tempElectricity,
                }}
              />
            </div>
            <div className="mr-8">
              <FilledInfoCard
                variant="gradient"
                color="success"
                icon={<i className="material-icons-round text-xl">whatshot</i>}
                title="Natural Gas"
                description=""
                action={{
                  func: this.changeGas,
                  funcT: this.changeTempGas,
                  unit: "inr",
                  value: this.state.tempGas,
                }}
              />
            </div>
            <div>
              <FilledInfoCard
                variant="gradient"
                color="success"
                icon={<i className="material-icons-round text-xl">local_drink</i>}
                title="Water"
                description=""
                action={{
                  func: this.changeWater,
                  funcT: this.changeTempWater,
                  unit: "inr",
                  value: this.state.tempWater,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-green-800"
            onClick={() => {
              localStorage.setItem("gas", this.state.gas);
              localStorage.setItem("water", this.state.water);
              localStorage.setItem("electricity", this.state.electricity);
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Utilities;
