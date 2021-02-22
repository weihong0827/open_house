import React from 'react';
import pic from '../Images/root_landing_5.jpg';
Background.propTypes = {

};

function Background(props) {
    return (
        <div className={"w-full h-screen-70"}>
            <img src={pic} className={"relative w-full h-screen-70 object-cover"}/>
            <h1 className={"relative w-full h-auto text-4xl -top-2/3 font-medium font-sans md:text-6xl text-center text-white"}>FIFTHROW SHOWCASE</h1>
        </div>
    );
}

export default Background;





