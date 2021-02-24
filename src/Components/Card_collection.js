import React, {useState} from 'react';
import Card from "./Card";
import MyModal from "./Modal";


function CardCollection({cat}) {

    return (

        <div className={"w-full flex justify-center  mt-4"}>

            <div className={"w-3/4 md:w-full sm:w-full flex-wrap justify-evenly flex max-w-screen-xl"}>
                {cat.map((item,index) => (
                    <Card key={index} detail={item}/>
                ))}
            </div>

        </div>
    );
}

export default CardCollection;