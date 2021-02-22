import React from 'react';
import {useState,useEffect} from "react";
import Logo from "../Images/Icons/Asset 1.png";

function MyNav({toggle}) {
    const [hide,setHide]=useState(false)
    const [burger,setBurger] = useState(false)
    useEffect(
        ()=>{
            if (window.innerWidth>640){
                setBurger(false)
            }else{
                setBurger(true)
            }
            window.onresize=()=>{
                if (window.innerWidth>640){
                    setBurger(false)
                }else{
                    setBurger(true)
                }
            }
        },[]
    )

    return (
        <div className={`w-full h-nav fixed z-10 flex justify-between items-center ${toggle ? "bg-gray-800":""}`}>

            <img src={Logo} className={"w-1/10 ml-10 h-logo"}/>
            <div className={`h-2/3 w-1/3 flex justify-end`}>
                <div className={`h-6 w-6 ${hide? "hidden":"flex"} flex-col justify-around cursor-pointer mr-10 md:hidden`} onClick={()=>{setHide(!hide)}}>
                    <div className={"h-1 w-full bg-white"}></div>
                    <div className={"h-1 w-full bg-white"}></div>
                    <div className={"h-1 w-full bg-white"}></div>
                </div>

                <div className={`transition-transform duration-500 ease-in-out ${hide?"transform translate-x-0":"transform  translate-x-full"} absolute top-0 bg-gray-800 w-vh-1/2 h-screen flex flex-col items-center justify-around`}>
                    <div className={`absolute top-4 h-6 w-6 flex flex-col justify-around cursor-pointer transition-transform delay-300 duration-100 ease-in-out ${hide?"transform translate-x-0":"transform  translate-x-full"}`} onClick={()=>{setHide(!hide)}}>
                        <div className={"h-1 w-full bg-white"}></div>
                        <div className={"h-1 w-full bg-white"}></div>
                        <div className={"h-1 w-full bg-white"}></div>
                    </div>
                    <a href={"#"} className={`no-underline text-white transition transform delay-100 duration-700 ease-out ${hide?"transform translate-x-0 ":"transform  translate-x-full"}`}>Home</a>
                    <a href={"#"} className={`no-underline text-white transition-transform delay-300 duration-700 ease-out ${hide?"transform translate-x-0":"transform  translate-x-full"}`}>Fifth Row</a>
                    <a href={"#"} className={`no-underline text-white transition-transform delay-500 duration-700 ease-out ${hide?"transform translate-x-0":"transform  translate-x-full"}`}>Schedule</a>
                </div>

                <nav className={`hidden md:flex w-full h-2/3 mr-10 items-center justify-around`}>
                    <a href={"#"} className={"no-underline text-white"}>Home</a>
                    <a href={"#"} className={"no-underline text-white"}>Fifth Row</a>
                    <a href={"#"} className={"no-underline text-white"}>Schedule</a>
                </nav>
            </div>


        </div>

    );
}

export default MyNav;