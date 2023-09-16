import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


export default function Visualize() {
    const [gdata1, setGData1] = useState([])
    const [gdata2, setGData2] = useState([])
    const [gdata3, setGData3] = useState([])
    const [gdata4, setGData4] = useState([])
    var arr1 = []
    var arr2= []
    var arr3 = []
    var arr4 = []

    useEffect(() => {
        arr1=[]
        arr2=[]
        arr3=[]
        arr4=[]
        arr1.push(localStorage.getItem("bus"))
        arr4.push(localStorage.getItem("hotel"))
        arr2.push(localStorage.getItem("electricity"))
        arr3.push(localStorage.getItem("restaurant"))
        arr4.push(localStorage.getItem("clothing"))
        arr3.push(localStorage.getItem("dairy"))
        arr3.push(localStorage.getItem("wine"))
        arr1.push(localStorage.getItem("car"))
        arr3.push(localStorage.getItem("other"))
        arr3.push(localStorage.getItem("fruitAndVeg"))
        arr1.push(localStorage.getItem("airplane"))
        arr1.push(localStorage.getItem("intercityTrain"))
        arr3.push(localStorage.getItem("meat"))
        arr1.push(localStorage.getItem("subway"))
        arr2.push(localStorage.getItem("gas"))
        console.log(arr1)
        setGData1(arr1)
        setGData2(arr2)
        setGData3(arr3)
        setGData4(arr4)
    }, [])

    const data1 = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [...gdata1],
                backgroundColor: ['red', 'yellow', 'pink', 'orange', 'purple'],
            },
        ],
    };

    const options1 = {
        responsive: true,
    };
    const data2 = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [...gdata2],
                backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'],
            },
        ],
    };

    const options2 = {
        responsive: true,
    };
    const data3 = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [...gdata3],
                backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'],
            },
        ],
    };

    const options3= {
        responsive: true,
    };
    const data4 = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [...gdata4],
                backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'],
            },
        ],
    };

    const options4 = {
        responsive: true,
    };


    return (
        <div>
            <h2>Pie Chart</h2>
            <div className="h-[30vh] flex justify-between">
                <Pie data={data1} options={options1} />
                <Pie data={data2} options={options2} />
                <Pie data={data3} options={options3} />
                <Pie data={data4} options={options4} />
            </div>
        </div>
    )
}
