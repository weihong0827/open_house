import React, {useEffect, useRef} from 'react';
import logo from '../Images/root.jpg';
import profile from '../Images/Icons/64495.png'
import mail_icon from '../Images/Icons/aiga_mail_bg-512.png'
import fb from '../Images/Icons/fb.jpg'
import ig from '../Images/Icons/ig.jpeg'
import telegram from '../Images/Icons/telegram-icon.png'


function MyModal({change}) {
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
    });
    return (

        <div className={"fixed flex justify-center items-center w-full h-full bg-black top-0 left-0 bg-opacity-80 z-20"} >
            <div className={"w-4/5 h-4/5 bg-white rounded-2xl flex flex-col max-w-screen-xl"} ref={ref}>
                <div className={"flex justify-end"}>
                    <button type="button" className={"w-8 h-8 bg-blue-400 mr-5 mt-3 rounded-md "} onClick={()=>change(false)}>
                        <span aria-hidden="true" className={"text-2xl text-white"}>X</span>
                    </button>
                </div>
                <div className={"flex justify-center w-full h-1/3 mt-6"}>
                    <div className={"w-4/5 h-full bg-black rounded-2xl bg-cover bg-center"} style={{backgroundImage:`url(${logo})`}}>

                    </div>
                </div>

                <div className={"flex h-1/4 justify-center mt-6"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-4x text-blue-400"}>Root</h2>
                        <p className={"hide_scroll overscroll-contain overflow-y-auto h-4/5"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Aliquam vestibulum morbi blandit cursus risus. Diam sollicitudin tempor id eu nisl. Purus sit amet volutpat consequat mauris nunc congue. Posuere urna nec tincidunt praesent semper. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Molestie nunc non blandit massa enim. Ut ornare lectus sit amet est placerat in egestas. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                        </p>
                    </div>

                </div>
                <div className={"flex h-1/6 justify-center mt-6"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-4x text-blue-400"}>POC</h2>
                        <div>
                            <img src={profile} className={"h-10 inline-block"}/>
                            <p className={"ml-4 inline-block"}>some_one</p>
                        </div>
                        <div>
                            <img src={mail_icon} className={"h-10 inline-block"}/>
                            <p className={"ml-4 inline-block"}>some_one@mymail.sutd.edu.sg</p>
                        </div>
                    </div>

                </div>

                <div className={"flex h-1/6 justify-center mt-6"}>
                    <div className={"w-4/5"}>
                        <h2 className={"text-4x text-blue-400"}>Schedule</h2>
                        <div className={"w-full "}>

                            <p className={"w-2/3 h-full inline-block leading-loose "}>Every Tuesday and Thursday from 4-6PM</p>


                            <div className={"w-1/3 inline-block float-right"}>
                                <a href={'#'} className={"float-right"}>
                                    <img src={ig} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>

                                </a>

                                <a href={'#'} className={"mr-4 float-right"}>
                                    <img src={fb} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
                                </a>
                                <a href={'#'} className={"mr-4 float-right"}>
                                    <img src={telegram} className={'h-6 w-6 inline-block md:h-8 md:w-8 lg:h-10 lg:w-10'}/>
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