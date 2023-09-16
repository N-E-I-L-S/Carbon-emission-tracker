import React, { Component } from "react";
import FilledInfoCard from "./Cards/FilledInfoCard";

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
      <div className="container mx-auto">
        <div className="text-center mt-10 mb-10">
          <h3 className="text-3xl">Home Utilities</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <FilledInfoCard
              variant="gradient"
              color="success"
              icon={<i className="material-icons-round text-xl">bolt</i>}
              title="Electricity"
              description=""
              action={{
                func: this.changeElectricity,
                funcT: this.changeTempElectricity,
                unit: "usd",
                value: this.state.tempElectricity,
              }}
            />
          </div>
          <div className="col-span-1">
            <FilledInfoCard
              variant="gradient"
              color="success"
              icon={<i className="material-icons-round text-xl">whatshot</i>}
              title="Natural Gas"
              description=""
              action={{
                func: this.changeGas,
                funcT: this.changeTempGas,
                unit: "usd",
                value: this.state.tempGas,
              }}
            />
          </div>
          <div className="col-span-1">
            <FilledInfoCard
              variant="gradient"
              color="success"
              icon={<i className="material-icons-round text-xl">local_drink</i>}
              title="Water"
              description=""
              action={{
                func: this.changeWater,
                funcT: this.changeTempWater,
                unit: "usd",
                value: this.state.tempWater,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            onClick={() => {
              localStorage.setItem("gas", this.state.gas);
              localStorage.setItem("water", this.state.water);
              localStorage.setItem("electricity", this.state.electricity);

              window.location.href = "/foodAndCloth";
            }}
          >
            Next: Food & Clothing
          </button>
        </div>
      </div>
    );
  }
}

export default Utilities;
