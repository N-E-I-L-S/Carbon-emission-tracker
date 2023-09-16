import React, { useEffect, useRef, useState } from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../components/Landing Page/Navbar'
import Hero from '../components/Landing Page/Hero'
import Partner from '../components/Landing Page/Mission'
import MissionComponent from '../components/Landing Page/Mission'
import Transportation from '../components/Calculator Page/Transportation'
import Utilities from '../components/Calculator Page/Utilities'
import FoodAndCloth from '../components/Calculator Page/FoodAndCloth'
import RestaurantAndAccommodation from '../components/Calculator Page/RestaurantAndAccommodation'
import Result from '../components/Calculator Page/Result'


export default function ResultPage() {
    const backgroundStyle = {
        backgroundImage: `url(https://springpack.co.uk/app/uploads/2021/11/still-life-sustainable-lifestyle-elements-composition-scaled.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional, to fix the background
        minHeight: "100vh",
      };
        return (
            <>
                <Navbar/>
                <div style={backgroundStyle}>
                    <Result/>
                </div>
            </>
        )
}
