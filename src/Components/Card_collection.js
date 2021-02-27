import React, {useState} from 'react';
import Card from "./Card";
import MyModal from "./Modal";
import Video from "./Video";
import sports from "../details/sports.json";
import arts from "../details/art.json";
import specialists from "../details/specialist.json";


function CardCollection({ art,sport,specialist}) {

    const [render,setRender] = useState(art)
    const change=(cat)=>{
        console.log(render,sport)
        if (cat==='arts'){
            setRender(art)
        }else if (cat==='sport'){
            setRender(sport)
        }
        else{
            setRender(specialist)
        }
    }
    return (
        <div>
            <div className={"relative flex text-xl w-full mt-8 justify-center md:text-4xl font-sans font-light"}>
                <nav className={"w-full p-1"}>
                    <ol className={"breadcrumb justify-content-center"} >
                        <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('arts')}>Arts</li>
                        <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('sport')}>Sports</li>
                        <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('specialist')}>Specialists</li>
                    </ol>
                </nav>

            </div>

            <Video/>
            <div className={"w-full flex justify-center  mt-4"}>
                <div className={"w-3/4 md:w-full sm:w-full flex-wrap justify-evenly flex max-w-screen-xl"}>
                    {render.map((item,index) => (
                        <Card key={index} detail={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardCollection;