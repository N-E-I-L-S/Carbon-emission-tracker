import React, { Component } from "react";
import UserAuth from "../context/UserAuth";

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            car: 0,
            bus: 0,
            subway: 0,
            airplane: 0,
            intercityTrain: 0,
            gas: 0,
            electricity: 0,
            water: 0,
            restaurant: 0,
            hotel: 0,
            other: 0,
            clothing: 0,
            dairy: 0,
            meat: 0,
            fruitAndVeg: 0,
            wine: 0,

            transportation: {},
            utilities: {},
            foodAndClothing: {},
            restaurantAndAccommodation: {},

            whichSelected: -1,

            resultArray: [],
            loaded: true,
            acctrigger: true,
            cgtrigger: true,
            transtrigger: true,
            utitrigger: true,
        };
    }

    async componentDidMount() {
        const data = window.localStorage;
        const data2Send = [
            {
                unit: data.getItem("period"),
            },
            {
                name: "NATURALGAS",
                value: data.getItem("gas"),
            },
            {
                name: "ELECTRICITY",
                value: data.getItem("electricity"),
            },
            {
                name: "WATER",
                value: data.getItem("water"),
            },
            {
                name: "CAR",
                value: data.getItem("car"),
            },
            {
                name: "BUS",
                value: data.getItem("bus"),
            },
            {
                name: "SUBWAY",
                value: data.getItem("subway"),
            },
            {
                name: "RAIL",
                value: data.getItem("intercityTrain"),
            },
            {
                name: "AIRPLANE",
                value: data.getItem("airplane"),
            },
            {
                name: "HOTEL",
                value: data.getItem("hotel"),
            },
            {
                name: "RESTAURANT",
                value: data.getItem("restaurant"),
            },
            {
                name: "FOOD",
                value: data.getItem("other"),
            },
            {
                name: "CLOTHING",
                value: data.getItem("clothing"),
            },
            {
                name: "DAIRY",
                value: data.getItem("dairy"),
            },
            {
                name: "MEAT",
                value: data.getItem("meat"),
            },
            {
                name: "FRUIT&VEG",
                value: data.getItem("fruitAndVeg"),
            },
            {
                name: "WINE",
                value: data.getItem("wine"),
            },
        ];
        console.log(data2Send);
        const url = "https://74xxrc6bkblhweowdhb53cjdjq0cnlzf.lambda-url.us-west-1.on.aws/";
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data2Send),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                const stats = res[1];
                const values = res[0];
                this.setState({ loaded: false })
                this.setState({ resultArray: stats })
                console.log(this.state.resultArray)
                this.setState({
                    gas: parseFloat(values[0].value),
                    electricity: parseFloat(values[1].value),
                    water: parseFloat(values[2].value),
                    car: parseFloat(values[3].value),
                    bus: parseFloat(values[4].value),
                    subway: parseFloat(values[5].value),
                    intercityTrain: parseFloat(values[6].value),
                    airplane: parseFloat(values[7].value),
                    hotel: parseFloat(values[8].value),
                    restaurant: parseFloat(values[9].value),
                    other: parseFloat(values[10].value),
                    clothing: parseFloat(values[11].value),
                    dairy: parseFloat(values[12].value),
                    meat: parseFloat(values[13].value),
                    fruitAndVeg: parseFloat(values[14].value),
                    wine: parseFloat(values[15].value),
                    foodAndClothing: stats.CONSUMER_GOODS,
                    restaurantAndAccommodation: stats.ACCOMMODATION,
                    utilities: stats.UTILITIES,
                    transportation: stats.TRANS,
                });
            })
            .then(() => this.setState({ fetched: true }));
    }

    clickHandler = (e) => {
        this.setState({ whichSelected: e });
    };

    renderRecommendation = () => {
        if (this.state.whichSelected === 0) {
            return this.state.transportation.recommendation;
        }
        if (this.state.whichSelected === 1) {
            return this.state.utilities.recommendation;
        }
        if (this.state.whichSelected === 2) {
            return this.state.foodAndClothing.recommendation;
        }
        if (this.state.whichSelected === 3) {
            return this.state.restaurantAndAccommodation.recommendation;
        }
        return "Select a category to see your recommendation";
    };

    handleClick = (value) =>{
        if(value ===0)
        this.setState({acctrigger : !this.state.acctrigger})
        if(value ===1 )
        this.setState({cgtrigger : !this.state.cgtrigger})
        if(value===2)
        this.setState({transtrigger : !this.state.transtrigger})
        if(value ===3)
        this.setState({utitrigger : !this.state.utitrigger})
        console.log(value)
    }

    render()
    {
        const {user} = this.props
        const { resultArray } = this.state
        const { loaded } = this.state
        console.log(user)
        if (!loaded)
            return (
                <>
                    <div className="mt-[20vh]">
                        <div className="flex justify-around">
                            <div onClick={()=>this.handleClick(0)} className="w-[20%] border-[1px]">
                                <p className="font-bold">ACCOMODATION</p>
                                {
                                    this.state.acctrigger ?
                                        resultArray.ACCOMMODATION.stats
                                        :
                                        resultArray.ACCOMMODATION.recommendation
                                }
                            </div>
                            <div onClick={()=>this.handleClick(1)} className="w-[20%] border-[1px]">
                                <p className="font-bold">CONSUMER GOODS</p>
                                {
                                    this.state.cgtrigger ?
                                        resultArray.CONSUMER_GOODS.stats
                                        :
                                        resultArray.CONSUMER_GOODS.recommendation
                                }
                            </div>
                            <div onClick={()=>this.handleClick(2)} className="w-[20%] border-[1px]">
                                <p className="font-bold">TRANS</p>
                                {
                                    this.state.transtrigger ?
                                        resultArray.TRANS.stats
                                        :
                                        resultArray.TRANS.recommendation
                                }
                            </div>
                            <div onClick={()=>this.handleClick(3)} className="w-[20%] border-[1px]">
                                <p className="font-bold">UTILITIES</p>
                                {
                                    this.state.utitrigger ?
                                        resultArray.UTILITIES.stats
                                        :
                                        resultArray.UTILITIES.recommendation
                                }
                            </div>
                        </div>
                    </div>
                </>
            );
    }
}

export default Result;