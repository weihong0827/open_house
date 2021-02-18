import React from 'react';
import pic from '../Images/root_landing_5.jpg';
Background.propTypes = {

};

function Background(props) {
    return (
        <div className={"w-full h-screen-70"}>
            <img src={pic} className={"relative w-full h-screen-70 object-cover"}/>
            <header className={"relative w-screen h-auto -top-2/3 font-medium font-sans text-6xl text-center text-white"}>FIFTHROW SHOWCASE</header>
        </div>
    );
}

export default Background;





