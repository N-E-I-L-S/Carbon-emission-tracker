import React, { useEffect, useState } from 'react'

export default function Ranking() {
    const [user, setUser] = useState([])
    async function GetRequest() {
        const res = await fetch('http://localhost:3001/api/getalluser')
        const json = await res.json();
        setUser(json)
        console.log(json)
    }

    const [data, setData] = useState([])
    function SetGraphData(){
        setData(user.sort((a, b) => b.emission - a.emission))
    }

    useEffect(() => {
        GetRequest()
        SetGraphData()
    }, [])
  return (
    <>
    <div className="">
       {data.map((i, index)=>{
        console.log(i)
        return(
            <div className="" key={index}>
                {i.username}
            </div>
        )
        })}
    </div>
    </>
  )
}
