import React from 'react';
import logo from '../Images/root.jpg';
import {useState} from "react";


Card.propTypes = {

};

function Card({change}) {

    return (
        <div className={" cursor-pointer group rounded-3xl w-300px h-300px inline-block bg-cover " +
        "opacity-60 bg-center shadow-2xl transition duration-500 ease-in-out transform hover:scale-110 " +
        "opacity hover:opacity-80 text-white m-4" } style={{backgroundImage:`url(${logo})`}} onClick={change} >
            <h5 className={"w-auto relative font-sans text-center text-4xl top-1/2 left-1/2 " +
            "transform -translate-y-1/2 -translate-x-1/2 transition duration-700 ease-in-out " +
            "transform group-hover:-translate-y-3/4"}>ROOT</h5>
            <p  className={"w-auto relative font-sans text-center text-2xl opacity-0  " +
            "top-1/2 left-1/2 transform -translate-y-2/3 -translate-x-1/2 transition duration-500 ease-in-out " +
            "opacity group-hover:opacity-100"}>SUTD Student Government</p>

        </div>

    );
}

export default Card;



