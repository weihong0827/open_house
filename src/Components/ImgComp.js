import React from 'react';

function ImgComp({image}) {
    console.log(image)
    return (
        <img src = {image} className={'w-full h-full object-cover'}/>
    );
}

export default ImgComp;