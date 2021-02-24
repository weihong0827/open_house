import React from 'react';
import ig from "../Images/Icons/Instagram-Logo.wine-2.png";
import fb from "../Images/Icons/fb.png";
import telegram from "../Images/Icons/telegram-icon.png";

function Footer(props) {
    return (
        <div className={"flex justify-around items-center h-48 bg-blue-600 w-full mt-20"}>
            <div className={"h-3/5 w-1/4 flex flex-col"}>
                <h6 className={"text-white font-bold text-sm md:text-base"}>SUTD Student Government</h6>

                <p className={'text-gray-200 m-0 text-xs md:text-base'}>
                    8 Somapah Road
                </p>
                <p className={'text-gray-200 m-0 text-xs md:text-base'}>
                    487372
                </p>
            </div>
            <div className={"h-3/5 w-1/4 flex flex-col"}>
                <h6 className={"text-white font-bold text-sm md:text-base"}>Follow Us</h6>
                <div className={"w-full inline-block mt-2 md:mt-6"}>
                    <a href={'#'} className={"mr-2 md:mr-4"}>
                        <img src={telegram} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>

                    <a href={'#'} className={"mr-2 md:mr-4"}>
                        <img src={fb} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>
                    <a href={'#'} >

                        <img src={ig} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                    </a>
                </div>
            </div>
            <div className={"h-3/5 w-1/4 flex flex-col"}>
                <h6 className={"text-white font-bold text-sm md:text-base"}>Contact Us</h6>
            </div>
        </div>
    );
}

export default Footer;