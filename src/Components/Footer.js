import React from 'react';
import ig from "../Images/Icons/ig.jpeg";
import fb from "../Images/Icons/fb.jpg";
import telegram from "../Images/Icons/telegram-icon.png";

function Footer(props) {
    return (
        <div className={"flex justify-around items-center h-48 bg-blue-600 w-full mt-20"}>
            <div className={"h-3/5 w-1/5 flex flex-col"}>
                <h6 className={"text-white font-bold"}>SUTD Student Government</h6>

                <p className={'text-gray-200 m-0'}>
                    8 Somapah Road
                </p>
                <p className={'text-gray-200 m-0'}>
                    487372
                </p>
            </div>
            <div className={"h-3/5 w-1/5 flex flex-col"}>
                <h6 className={"text-white font-bold"}>Follow Us</h6>
                <div className={"w-full inline-block mt-6"}>
                    <a href={'#'} className={"mr-4"}>
                        <img src={telegram} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>

                    <a href={'#'} className={"mr-4"}>
                        <img src={fb} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>
                    <a href={'#'} >
                        <img src={ig} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>
                </div>
            </div>
            <div className={"h-3/5 w-1/5 flex flex-col"}>
                <h6 className={"text-white font-bold"}>Contact Us</h6>
            </div>
        </div>
    );
}

export default Footer;