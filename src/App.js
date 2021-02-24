
import './App.css';
import "bootstrap";
import Card_collection from "./Components/Card_collection";


import MyNav from "./Components/MyNav";
import Background from "./Components/Background";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from "react";
import Categories from "./Components/Categories";
import Description from "./Components/Description";
import MyModal from "./Components/Modal";
import Footer from "./Components/Footer";
import arts from "./details/art.json";
import sports from "./details/sports.json";
import specialists from "./details/specialist.json";

function App() {


    const [sport,setSport] = useState([])

    for (const i in sports) {
        sport.push(sports[i])
    }
    const [art,setArt] = useState([])

    for (const i in arts) {
        art.push(arts[i])
    }
    const [specialist,setSpecialist] = useState([])

    for (const i in specialists) {
        specialist.push(specialists[i])
    }
    const [render,setRender] = useState(art)
    const change=(cat)=>{

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
    <div className="App" >
        <MyNav/>
        <Background/>
        <div className={"relative flex text-xl w-full mt-8 justify-center md:text-4xl font-sans font-light"}>
            <nav className={"w-full p-1"}>
                <ol className={"breadcrumb justify-content-center"} >
                    <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('arts')}>Arts</li>
                    <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('sport')}>Sports</li>
                    <li className="breadcrumb-item inline-block cursor-pointer" onClick={()=>change('specialist')}>Specialists</li>
                </ol>
            </nav>

        </div>

        <Description/>

        <Card_collection cat={render}/>

        <Footer/>
    </div>
  );

}

export default App;
