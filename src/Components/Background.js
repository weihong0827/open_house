import React, {useState} from 'react';
import pic from '../Images/root_landing_5.jpg';
import root from '../Images/root.jpg'
import ImgComp from "./ImgComp";
Background.propTypes = {

};

function Background(props) {
    const [x,setX] = useState(0)
    const sliderArr = [pic,root]
    const goLeft=()=>{

        x===0 ?setX(-100*(sliderArr.length-1)):setX(x+100)

    }
    const goRight=()=>{
        x===-100*(sliderArr.length-1)?setX(0):setX(x-100)
    }
    return (
        // <div className={"w-full h-screen-70"}>
        //     <img src={pic} className={"relative w-full h-screen-70 object-cover"}/>
        //     <h1 className={"relative w-full h-auto text-4xl -top-2/3 font-medium font-sans md:text-6xl text-center text-white"}>FIFTHROW SHOWCASE</h1>
        // </div>
        <div className={"w-full h-screen-70 flex relative top-background overflow-x-scroll slides"}>
            {/*<button className={'sticky left-4 w-10 h-10 md:w-20 md:h-20 top-1/2 transform -translate-y-1/2 rounded-full bg-white z-10' +*/}
            {/*' opacity-80 transition  duration-700 ease-in-out opacity hover:opacity-100 transform hover:scale-110'} onClick={goLeft} style={{outline:'none'}}>*/}
            {/*    <i className="fas fa-chevron-left"></i>*/}
            {/*</button>*/}

            {
                sliderArr.map((item,index)=>{
                    return (

                        <div className={'min-w-full transition-transform duration-700 ease-in-out'} id={'slide'+index} key={index} style={{transform:`translateX(${x}%)`}}>
                            <ImgComp image={item}/>
                        </div>

                    )
                })
            }


            {/*<button className={'sticky right-4 w-10 h-10 md:w-20 md:h-20 top-1/2 transform -translate-y-1/2 rounded-full bg-white' +*/}
            {/*' opacity-80 transition  duration-700 ease-in-out opacity hover:opacity-100 transform hover:scale-110'} onClick={goRight} style={{outline:'none'}}>*/}
            {/*    <i className={"fas fa-chevron-right text-lg md:text-4xl"}></i>*/}
            {/*</button>*/}


        </div>
    );
}

export default Background;





