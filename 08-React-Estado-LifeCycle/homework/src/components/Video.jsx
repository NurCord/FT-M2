import React from "react"
import myVideo from '../myVideo.mp4';
import './video.css'

export default function Video(){
    return (
        <div className="Container">
            <video className="Video" src={myVideo} loop autoPlay muted></video>
        </div>
    )
}