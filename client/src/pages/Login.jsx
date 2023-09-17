import React, { useEffect, useRef, useState } from 'react';
import UserAuth from '../context/UserAuth';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const { user, login } = UserAuth();
    const uname = useRef();
    const pwd = useRef();
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            console.log(email);
            setLogged(false);
            setLogged1(true);
            localStorage.setItem("User", email)
            navigate('/home');
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };

    useEffect(() => {
        console.log(user);
    }, []);

    if (user == null)
        return (
            <div className="flex h-screen bg-gray-100">
                <div className="m-auto p-4 rounded-lg shadow-lg bg-white flex">
                    <div className="w-1/2 p-4">
                        <img
                            src="https://imgs.search.brave.com/j6DtfAPsKD7-6Ds2hUr_YMF1Fx3Qhk_JP26POseplFg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiLzNk/LzViL2ZiM2Q1YmIw/YWM2ZjNjNGJkNzdk/MWZlYzdjMmI0NDMy/LS1zdXN0YWluYWJs/ZS10b3VyaXNtLWNh/cmJvbi1mb290cHJp/bnQuanBn" // Replace with your image URL
                            alt="Login"
                            className="w-full h-auto"
                            style={{height:"400px"}}
                        />
                    </div>
                    <div className="w-1/2 p-4">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin(uname.current.value, pwd.current.value);
                            }}
                        >
                            <div className="mb-4">
                                <h5 className="text-2xl font-semibold mb-2">Login</h5>
                                {logged ? (
                                    <p className="text-red-500 mb-2">Wrong Credentials</p>
                                ) : null}
                                {logged1 ? (
                                    <p className="text-green-500 mb-2">Logged In!</p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Username"
                                    className="w-full p-2 border rounded"
                                    ref={uname}
                                    required={true}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-2 border rounded"
                                    ref={pwd}
                                    required={true}
                                />
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="text-center">
                                <NavLink to="/signup" className="text-blue-500">
                                    Don't have an account? Sign up
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    else navigate('/home');
}
