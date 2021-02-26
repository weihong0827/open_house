import React, {useLayoutEffect,useState}from 'react';

function Video(props) {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className={"flex justify-center w-full"}>

            <iframe className={'w-3/4 h-video'} src={"https://www.youtube.com/embed/aatr_2MstrI"} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen={true} style={{'width':'560px',height:'315px'}}></iframe>
        </div>
    );
}

export default Video;