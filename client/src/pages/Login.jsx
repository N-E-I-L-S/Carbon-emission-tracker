import React, { useEffect, useRef, useState } from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'


export default function LoginPage() {

    async function addUser(){
        const body = {
            username: uname
        }
        const url = `http://localhost:3001/api/adduser`
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
          body: body,
          });
        if(response)
        console.log("User Added")
        else
        console.log('error')
        }
        catch{
            console.log('error')
          }
    }

    const { user, login } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    const navigate = useNavigate()
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            console.log(email);
            setLogged(false);
            setLogged1(true);
            addUser();
            navigate("/home")
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    useEffect(() => {
        console.log(user)
    }, [])
    if (user == null)
        return (
            <>
                <div className="login-page">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(uname.current.value, pwd.current.value)
                    }}
                    >
                        <div className="login-div">
                            <h5 className='mb-4'>Kindly Login To Add Blog</h5>
                            {logged ?
                                <p className='pmatch'>Wrong Credentials</p>
                                :
                                null
                            }
                            {logged1 ?
                                <p className='pmatch-1'>Logged In!</p>
                                :
                                null
                            }

                            <div className="username">
                                {/* <label htmlFor="">Username</label> <br /> */}
                                <input placeholder='Username' type="email" id="uname" ref={uname} required={true} />
                            </div>
                            <div className="password">
                                {/* <label htmlFor="">Password</label> <br /> */}
                                <input placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
                            </div>

                            <div className="btns">
                                <button type='submit' className='blogcardbtn'>Login</button>
                            </div>
                            <div className='login-options my-3' style={{ marginLeft: "25vw" }}>
                                <NavLink className="td" to='/signup'>Don't have an account?  </NavLink> <br />
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    else
        navigate("/home")
}
