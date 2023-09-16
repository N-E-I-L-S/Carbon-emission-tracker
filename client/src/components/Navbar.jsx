import React from 'react'
import UserAuth from '../context/UserAuth'

export default function Navbar() {
    const {logout} = UserAuth()
  return (
    <>
    <button onClick={logout}>Logout</button>
    </>
  )
}
