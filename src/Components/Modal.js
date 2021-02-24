import React, {useEffect, useRef} from 'react';
import logo from '../Images/root.jpg';
import profile from '../Images/Icons/64495.png'
import mail_icon from '../Images/Icons/aiga_mail_bg-512.png'
import ig from "../Images/Icons/Instagram-Logo.wine-2.png";
import fb from "../Images/Icons/fb.png";
import telegram from '../Images/Icons/telegram-icon.png'


function MyModal({change,detail}) {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            change(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    },[]);


    return (

        <div className={"fixed flex justify-center items-center w-screen h-screen bg-black top-0 left-0 bg-opacity-80 z-20"} >
            <div className={"w-4/5 h-4/5 bg-white rounded-2xl flex flex-col max-w-screen-xl"} ref={ref}>
                <div className={"flex justify-end"}>
                    <button type="button" className={"w-8 h-8 bg-blue-400 mr-5 mt-3 rounded-md "} onClick={()=>change(false)}>
                        <span aria-hidden="true" className={"text-2xl text-white"}>X</span>
                    </button>
                </div>
                <div className={"flex justify-center w-full h-1/3 mt-6"}>
                    <div className={"w-4/5 h-full bg-black rounded-2xl bg-cover bg-center"} style={{backgroundImage:detail['color']}}>
                    </div>
                </div>

                <div className={"flex h-1/4 md:h-1/5 justify-center mt-6"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-xl md:text-2xl text-blue-400"}>{detail.club_name}</h2>
                        <p className={"hide_scroll overscroll-contain overflow-y-auto h-4/5"}>
                            {detail['Club Description']}
                        </p>
                    </div>

                </div>
                <div className={"flex h-1/6 justify-center mt-4 flex-wrap"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-xl md:text-2xl text-blue-400"}>POC</h2>
                        <div className={'w-full h-1/4 flex flex-warp'}>
                            <img src={profile} className={"h-4 md:h-8 inline-block"}/>
                            <p className={"ml-2 md:ml-4 inline-block"}>{detail["President's Name"]}</p>
                        </div>
                        <div className={'w-full h-1/3 flex flex-warp'}>
                            <img src={mail_icon} className={"h-4 mt-1 md:h-8 inline-block"}/>
                            <p className={"ml-2 md:ml-4 md:mt-2 inline-block overflow-x-scroll"}>{detail["email"]}</p>
                        </div>
                    </div>

                </div>

                <div className={"flex h-1/6 justify-center items-center"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-xl md:text-2xl m-0 text-blue-400"}>Schedule</h2>
                        <div className={"w-full"}>
                            <p className={"w-2/3 h-full mt-2 inline-block leading-loose text-sm md:text-base"}>{detail['schedule']}</p>
                            <div className={"w-1/3 pt-2 inline-block float-right"}>
                                {detail.ig && <a href={detail["ig"]} target={'_blank'} className={"float-right"}>
                                    <img src={ig} className={'h-5 w-5 inline-block md:h-8 md:w-8'}/>
                                </a>}

                                {detail.facebook && <a href={detail.facebook} target={'_blank'} className={"mr-2 md:mr-4 float-right"}>
                                    <img src={fb} className={'h-5 w-5 inline-block md:h-8 md:w-8'}/>
                                </a>}
                                <a href={detail['President\'s Telegram Handle']} target={'_blank'} className={"mr-2 md:mr-4 float-right"}>
                                    <img src={telegram} className={'h-5 w-5 inline-block md:h-8 md:w-8'}/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyModal;