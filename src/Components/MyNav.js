import React from 'react';

import Logo from "../Images/Icons/Asset 1.png";

function MyNav({toggle}) {

    return (
        <div className={`w-full h-20 fixed z-10 flex justify-between items-center ${toggle ? "bg-gray-800":""}`}>
            <img src={Logo} className={"w-1/10 ml-10 h-2/3"}/>
            <nav className={"w-1/3 h-2/3 mr-10 flex items-center justify-around"}>
                <a href={"#"} className={"no-underline text-white"}>Home</a>
                <a href={"#"} className={"no-underline text-white"}>Fifth Row</a>
                <a href={"#"} className={"no-underline text-white"}>Schedule</a>
            </nav>
        </div>

    );
}

export default MyNav;