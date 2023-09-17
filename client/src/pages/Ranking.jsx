import React, { useEffect, useState } from 'react'
import GoldT from '../assets/gold.png'
import SilverT from '../assets/silver.png'
import BronzeT from '../assets/bronze.png'
import Navbar from "../components/Landing Page/Navbar";

export default function Ranking() {
    const [data, setData] = useState([])
    const [top, setTop] = useState([])
    const [remaindata, setRemainData] = useState([])
    const [loading, setLoading] = useState(true)
    async function GetRequest() {
        const res = await fetch('http://localhost:3001/api/getalluser')
        const json = await res.json();
        const sortedData = json.sort((a, b) => a.emission - b.emission);
        const top = sortedData.slice(0, 3);
        setTop(top)
        setData(sortedData);
        const remain = sortedData.slice(3)
        setRemainData(remain)
        console.log(remain)
        setLoading(false)
    }

    // function SetGraphData(){
    //     setData(user.sort((a, b) => b.emission - a.emission))
    // }

    useEffect(() => {
        GetRequest()
        // SetGraphData()
    }, [])
    if(!loading)
  return (
    <>
    <Navbar/>
    <div className="pt-20">
      <div className="flex flex-col p-4 w-[80%] mt-20">
        <div className="flex mt-4">
        <img src={GoldT} alt="" style={{height: "4.5rem", marginRight: "2rem"}} /> 
        <div className="w-[100%]  border-white bg-blue-500 py-6 pl-4 ">
           {top[0].username}
        </div>
        </div>
        <div className="flex mt-4">
        <img src={SilverT} alt="" style={{height: "4.5rem", marginRight: "2rem"}} />
        <div className="w-[80%]  border-white bg-blue-300 py-6 pl-4 ">
            {top[1].username}
        </div>
        </div>
        <div className="flex mt-4">
            <img src={BronzeT} alt="" style={{height: "4.5rem", marginRight: "2rem"}} />
        <div className="w-[60%] border-white bg-blue-100 py-6 pl-4 ">
            {top[2].username}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
