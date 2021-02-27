
import './App.css';
import "bootstrap";
import Card_collection from "./Components/Card_collection";


import MyNav from "./Components/MyNav";
import Background from "./Components/Background";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from "react";

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

    return (
    <div className={'App overflow-x-hidden'} >
        <MyNav/>
        <Background/>
        <Card_collection sport={sport} specialist={specialist} art={art}/>

        <Footer/>
    </div>
  );

}

export default App;
