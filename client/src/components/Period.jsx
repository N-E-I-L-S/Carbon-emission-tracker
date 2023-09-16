import React, { Component } from "react";

class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0, // Set the default selected option as a numeric value
    };
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: parseInt(e.target.value, 10), // Parse the value to an integer
    });
  };

  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-center">
            <div className="w-full md:w-7/12 text-center mt-10 mb-10">
              <h3 className="text-2xl font-semibold">
                Please select the time period you would like to calculate your carbon footprint for.
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <label className="block text-gray-700 text-lg font-bold mb-2">Select Period</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={0}
                      checked={this.state.selectedOption === 0}
                      onChange={this.handleOptionChange}
                      className="form-radio text-indigo-600 h-5 w-5"
                    />
                    <span className="text-gray-900">Day</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={1}
                      checked={this.state.selectedOption === 1}
                      onChange={this.handleOptionChange}
                      className="form-radio text-indigo-600 h-5 w-5"
                    />
                    <span className="text-gray-900">Week</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={2}
                      checked={this.state.selectedOption === 2}
                      onChange={this.handleOptionChange}
                      className="form-radio text-indigo-600 h-5 w-5"
                    />
                    <span className="text-gray-900">Month</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
              onClick={() => {
                localStorage.setItem("period", this.state.selectedOption);
                // Replace '/transportation' with your desired route
                window.location.href = "/transportation";
              }}
            >
              Next: Transportation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Period;
