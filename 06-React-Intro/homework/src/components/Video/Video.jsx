import React from "react"
import myVideo from './myVideo.mp4';
import {VideoS, Container} from './videoStyle';

export default function Video(){
    return (<>
        <Container>
            <VideoS src={myVideo} loop autoPlay muted/>
        </Container>
    </>)
}