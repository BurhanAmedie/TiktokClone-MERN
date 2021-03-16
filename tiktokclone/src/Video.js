import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter.js';
import VideoSidebar from './VideoSidebar';

function Video({url , likes, messages, shares,channel, description, song}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)
    
    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className= "video">
            {/* full video */}
            <video 
            className= "video_player"
            onClick= {handleVideoPress}
            ref= {videoRef}
            loop
            src= {url}>

            </video>
            {/* video footer */}
            <VideoFooter channel={channel} description={description} song={song} />
            {/* video sidebvar */}
            <VideoSidebar likes={likes} messages= {messages} shares={shares}/>
        </div>
    )
}

export default Video
