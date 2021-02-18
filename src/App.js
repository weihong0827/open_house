
import './App.css';
import Card_collection from "./Components/Card_collection";

import Logo from "./Logo.png";
import MyNav from "./Components/MyNav";
import Background from "./Components/Background";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from "react";
import Categories from "./Components/Categories";
import Description from "./Components/Description";
import MyModal from "./Components/Modal";
import Footer from "./Components/Footer";
function App() {
    const [show,setShow] =useState(false)
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            {console.log(toggle)}
            if (window.pageYOffset>0){

                setToggle(true)

            }else{
                setToggle(false)
            }
        }
    }, []);


    return (
    <div className="App overflow-hidden">


        <MyNav toggle={toggle}/>
        <Background/>
        <Categories/>
        <Description/>
        <Card_collection change={()=>setShow(!show)}/>
        {show && <MyModal change={setShow}/>}
        <Footer/>
    </div>
  );
}

export default App;
