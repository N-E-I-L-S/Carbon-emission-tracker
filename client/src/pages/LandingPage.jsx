import React, { useEffect, useRef, useState } from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../components/Landing Page/Navbar'
import Hero from '../components/Landing Page/Hero'
import Partner from '../components/Landing Page/Mission'
import MissionComponent from '../components/Landing Page/Mission'


export default function LandingPage() {
        return (
            <>
                <Navbar/>
                <Hero/>
                <MissionComponent/>
            </>
        )
}
