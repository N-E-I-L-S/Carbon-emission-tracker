import React, { Component } from "react";
import Navbar from "../Landing Page/Navbar";
import ClimateHero from "../assets/Climatehero.jpg";
import FairEnough from "../assets/HeroCeros.png";
import Thug from "../assets/Climate_Thug.png";
import Character from "../Cards/Character";

function calculatePercentage(input, constant) {
    return (input * constant) / 100;
}
  
class Result extends Component {   
    data = window.localStorage;
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
        // this.setState({acctrigger : !this.state.acctrigger})
        alert(this.state.restaurantAndAccommodation.recommendation)
        if(value ===1 )
        alert(this.state.foodAndClothing.recommendation)
        if(value===2)
        alert(this.state.transportation.recommendation)
        if(value ===3)
        alert(this.state.utilities.recommendation)
        console.log(value)
    }
    rest = {
        pred:0,
        constantValue: 14,
        result: 0,
    };
    foodCloth = {
        pred:0,
        constantValue: 1477,
        result: 0,
    };
    transport = {
        pred:0,
        constantValue: 70,
        result: 0,
    };
    util = {
        pred:0,
        constantValue: 69,
        result: 0,
    }
    result={
        one:0,
        two:0,
        three:0,
        four:0,
        final:0,
    }
    regex = /(\d+(\.\d+)?)%/;
    render() {
        const { resultArray } = this.state
        const { loaded } = this.state
        
        if (!loaded)
            return (
                <>
                    <div className="">
                    <div className="text-center text-2xl font-semibold pt-20 fontColor">
                        <h3 variant="h1">Your Total Carbon Footprints !</h3>
                        <br />
                        <h5><i>Click a card to see the recommendations</i></h5>
                    </div>
  <div className="flex justify-around pt-10">
  <div
  onClick={() => this.handleClick(0)}
  className="w-[20%] border-[1px] rounded-md p-4 relative" // Add 'relative' class
  style={{
    backgroundImage: `url(https://imgs.search.brave.com/6SWoyNt1QI5qy3G8kzSR9vwMFs7QbQAwzD9IoIM11qc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDk3/NS8xMTc3My9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzExNzczMzEz/Mi1zdG9jay1waG90/by1tb2Rlcm4taG90/ZWwtcm9vbS13aXRo/LWJpZy5qcGc)`,
    backgroundSize: "cover",
    height: "300px",
  }}
>
  {/* Add a ::before pseudo-element */}
  <div className="absolute inset-0 opacity-50 rounded-md" style={{background: 'rgb(60, 179, 113)'}}></div>
  <p className="font-bold text-xl text-white absolute inset-0 flex justify-center mt-20 ml-12">
    ACCOMMODATIONS
  </p>
  <div className="font-bold text-xl text-white absolute inset-0 flex justify-center items-center mt-32">
    {this.state.acctrigger
      ? resultArray.ACCOMMODATION.stats
      : resultArray.ACCOMMODATION.recommendation}
  </div> 
  <div className="font-bold text-xl text-white absolute inset-0 justify-center items-center mt-32 ml-12 ">
  <p>Your Goal : 1000 kg Co2e</p>
  <p>Actual Emission: {calculatePercentage(this.result.one,this.rest.constantValue)}</p>
  </div>
  <p style={{display:"none"}}>{this.rest.pred = resultArray.ACCOMMODATION.stats}</p>
</div>
    <div onClick={() => this.handleClick(1)} className="w-[20%] border-[1px] rounded-md p-4 relative"
        style={{backgroundImage: `url(https://imgs.search.brave.com/9rYM48pV5SVUlvlHNMDhdsUN3I0gpriFbrCQQAhV5r0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbWVyaWNhbi1m/YXN0LWZvb2QtaGFt/YnVyZ2Vycy1mcmVu/Y2gtZnJpZXMtaG90/LWRvZ3MtZmFzdC1m/b29kLXVuaGVhbHRo/eS1lYXRpbmctY29u/Y2VwdC10b3Atdmll/d18xMTQ5NDEtMjU0/NS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw)`,backgroundSize: "cover",height: "300px",}}>
      <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-md" style={{background: 'rgb(60, 179, 113)'}}></div>
      <p className="font-bold text-xl text-white absolute inset-0 flex justify-center mt-20 ml-4">FOOD & CLOTHING</p>
      <div className="font-bold text-xl text-white absolute inset-0 flex justify-center items-center mt-32">
        {this.state.cgtrigger ? resultArray.CONSUMER_GOODS.stats : resultArray.CONSUMER_GOODS.recommendation}
    </div>
    <div className="font-bold text-xl text-white absolute inset-0 justify-center items-center mt-32 ml-12 ">
    <p>Your Goal : 1000 kg Co2e</p>
    <p>Actual Emission: {calculatePercentage(this.result.two,this.rest.constantValue)}</p>
    </div>
    <p style={{display:"none"}}>{this.rest.pred = resultArray.CONSUMER_GOODS.stats}</p>
    </div>
    <div onClick={() => this.handleClick(2)} className="w-[20%] border-[1px] rounded-md p-4 relative"
        style={{backgroundImage: `url(https://imgs.search.brave.com/R7-N6Sfop7JVJwUbWOIvwjdm9d5x_O7grHy1o-oN3IQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzIzMzAzODQ3ODUt/Zjk0Yzg0MzUyZTkx/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRC/OGZIUnlZVzV6Y0c5/eWRHRjBhVzl1ZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA)`,backgroundSize: "cover",height: "300px",}}>
      <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-md" style={{background: 'rgb(60, 179, 113)'}}></div>
      <p className="font-bold text-xl text-white absolute inset-0 flex justify-center mt-20 ml-4">TRANSPORTATION</p>
      <div className="font-bold text-xl text-white absolute inset-0 flex justify-center items-center mt-32">
        {this.state.transtrigger ? resultArray.TRANS.stats : resultArray.TRANS.recommendation}
    </div>
    <div className="font-bold text-xl text-white absolute inset-0 justify-center items-center mt-32 ml-12 ">
    <p>Your Goal : 1000 kg Co2e</p>
    <p>Actual Emission: {calculatePercentage(this.result.three,this.rest.constantValue)}</p>
    </div>
    <p style={{display:"none"}}>{this.rest.pred = resultArray.TRANS.stats}</p>
    </div>
    <div onClick={() => this.handleClick(3)} className="w-[20%] border-[1px] rounded-md p-4 relative"
        style={{backgroundImage: `url(https://imgs.search.brave.com/RDHOTGqDeFJxMeA50ZilhTylZhjrfGFG0ARPu7L0g3U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/NjYyNTEzNi9waG90/by93YXRlci10YXAt/cGhvdG8tZnJvbS1m/aW5sYW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1EcUNf/eGhPdDRlYXNwYUky/YnJlVmdpYkx6dHBJ/V3kxN3VSMVd5cjI1/TFVBPQ)`,backgroundSize: "cover",height: "300px",}}>
      <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-md" style={{background: 'rgb(60, 179, 113)'}}></div>
      <p className="font-bold text-xl text-white absolute inset-0 flex justify-center mt-20 ml-4">UTILITIES</p>
      <div className="font-bold text-xl text-white absolute inset-0 flex justify-center items-center mt-32">
        {this.state.utitrigger ? resultArray.UTILITIES.stats : resultArray.UTILITIES.recommendation}
      </div>
      <div className="font-bold text-xl text-white absolute inset-0 justify-center items-center mt-32 ml-12 ">
        <h3 className="justify-center items-center">Your Goal : 1000 kg Co2e</h3>
        <h3 className="justify-center items-center">Actual Emission: {calculatePercentage(this.result.four,this.rest.constantValue)}</h3>
      </div>
      <p style={{display:"none"}}>{this.rest.pred = resultArray.UTILITIES.stats}</p>
    </div>
  </div>
  <div style={{display:"none"}}>
    {this.result.one = parseFloat(resultArray.ACCOMMODATION.stats.match(this.regex))}
    {this.result.two = parseFloat(resultArray.CONSUMER_GOODS.stats.match(this.regex))}
    {this.result.three = parseFloat(resultArray.TRANS.stats.match(this.regex))}
    {this.result.four = parseFloat(resultArray.UTILITIES.stats.match(this.regex))}
  </div>
  <div style={{display:"none"}}>
    {this.result.final = calculatePercentage(this.result.one,this.rest.constantValue)+calculatePercentage(this.result.two,this.foodCloth.constantValue)+calculatePercentage(this.result.three,this.transport.constantValue)+calculatePercentage(this.result.four,this.util.constantValue)}
  </div>
  <div className="text-center text-2xl font-semibold pt-20 fontColor">
        <h3 variant="h1">Your Total Carbon Emissions {this.result.final} kg CO2e</h3>
    </div>
  <div>
  </div>
</div>
<div className="flex justify-around pt-10">
      {this.result.final < 3000 && (
        <Character
          image={ClimateHero}
          title="Yayyyy !! You're a CLIMATE HERO !"
          content="You're making a positive impact on the environment with your sustainable choices."
        />
      )}
      {this.result.final >= 3000 && this.result.final < 7000 && (
        <Character
          image={FairEnough}
          title="Hmmmmm... Fair Enough."
          content="You're on the right track, making efforts to reduce your carbon footprint."
        />
      )}
      {this.result.final >= 7000 && (
        <Character
          image={Thug}
          title="You're a CLIMATE THUG"
          content="It's time to rethink your actions and make more responsible choices"
        />
      )}
    </div>
        </>
            );
    }
}

export default Result;