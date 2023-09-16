import React from 'react'
import { useState } from 'react'


export default function Header(){

    const [fix,setFix] = useState (false)

        function setFixed(){
            if(window.scrollY >= 392){
                setFix(true)
            }else{
                setFix(false)
            }
        }
        window.addEventListener("scroll",setFixed)


  return (
    <div>
    <header className="fixed w-full z-50">
        <nav className={fix? 'navbar-scrolled': 'border-gray-200'} style={{padding :"1rem"}}>
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    {/* <img src="img/tailwind-logo.svg" className="h-6 mr-3 sm:h-9" alt="Tailwind Logo" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Tailwind</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="/login" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-green-800">Login</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 gap-5 lg:mt-0">
                        <li>
                            <a href="/home" className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/calculate" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 ">Calculator</a>
                        </li>
                        <li>
                            <a href="https://11a1cecbaaa9b99c0f.gradio.live/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 ">ChatBot</a>
                        </li>
                        <li>
                            <a href="/community" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 ">Team</a>
                        </li>
                        <li>
                            <a href="https://public.tableau.com/views/Technovate/Dashboard1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 ">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    </div>
  )
}