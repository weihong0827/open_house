import React from 'react';
import Card from "./Card";
import MyModal from "./Modal";
import {useState} from "react";

function CardCollection({change}) {


    return (

        <div className={"w-full flex justify-center  mt-4"}>
            <div className={"w-3/4 md:w-full sm:w-full flex-wrap justify-evenly flex max-w-screen-xl"}>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>
                <Card change={change}/>

            </div>
        </div>
    );
}

export default CardCollection;