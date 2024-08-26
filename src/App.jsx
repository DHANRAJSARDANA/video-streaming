import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
function App() {
  const playerRef=useRef(null)
  const videoLink="http://localhost:2000/uploads/courses/ec67ad70-52b6-419c-8b46-cb8b10fd59f2/index.m3u8";
  const videoPlayerOptions={
    controls:true,
    responsive:true,
    fluid:true,
    sources:[{
      src:videoLink,
      type:'application/x-mpegURL'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
    <div>
      <h1>Video Player</h1>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
    </div>
    </>
  )
}

export default App
