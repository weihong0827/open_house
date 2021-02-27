import React, {useState,useEffect} from 'react';
import pic from '../Images/root_landing_5.jpg';
import root from '../Images/root.jpg'
import ImgComp from "./ImgComp";
Background.propTypes = {

};

function Background(props) {
    const [x,setX] = useState(0)
    const sliderArr = [pic,root,pic,root]
    useEffect(()=>{
        const intervalId = setInterval(goRight,5000);
        return ()=>{clearInterval(intervalId)}
    })
    const goLeft=()=>{

        x===0 ?setX(-100*(sliderArr.length-1)):setX(x+100)

    }
    const goRight=()=>{
        console.log('hi')
        x===-100*(sliderArr.length-1)?setX(0):setX(x-100)
    }
    const toSlide=(index)=>{
        setX(index*(-100))
    }
    return (
        <div className={"w-full h-screen-70 flex justify-center"}>
            <div className={'w-full h-full flex relative top-background overflow-x-hidden'}>

                {
                    sliderArr.map((item,index)=>{
                        return (
                            <div className={'min-w-full transition-transform duration-700 ease-in-out'} id={`slide`+index} key={index} style={{transform:`translateX(${x}%)`}}>
                                <ImgComp image={item}/>
                            </div>

                        )
                    })
                }

                <div className={'w-full flex justify-center h-6 bg-blue absolute top-3/4 mt-24'}>
                    {
                        sliderArr.map((item,index)=>{
                            return (
                                <div className={`w-8 md:w-8 lg:w-10 h-2 inline-block cursor-pointer mr-2 md:mr-4 ${index===Math.abs(x/100) ? 'bg-white':'bg-gray-400'}`} onClick={()=>{toSlide(index)}} key={index} >
                                </div>
                            )
                        })
                    }
                </div>

                <button className={'absolute left-4 w-10 h-10 md:w-20 md:h-20 top-1/2 transform -translate-y-1/2 rounded-full bg-white' +
                ' opacity-80 transition  duration-700 ease-in-out opacity hover:opacity-100 transform hover:scale-110'} onClick={goLeft} style={{outline:'none'}}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className={'absolute right-4 w-10 h-10 md:w-20 md:h-20 top-1/2 transform -translate-y-1/2 rounded-full bg-white' +
                ' opacity-80 transition  duration-700 ease-in-out opacity hover:opacity-100 transform hover:scale-110'} onClick={goRight} style={{outline:'none'}}>
                    <i className={"fas fa-chevron-right text-lg md:text-4xl"}></i>
                </button>
            </div>

        </div>
    );
}

export default Background;





