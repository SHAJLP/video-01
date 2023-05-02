import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState(null)

  function playvideo(e, videoId){
    e.preventDefault()
    setVideoId(videoId)
  }
  return (
    <div className="App">
      {videoId && <videoPlayer videoId={videoId}></videoPlayer>} <br/>
      <button onClick={(e)={playVideo(e,'video1.webm')}}> Play Video 1</button>
      <button onClick={(e)={playVideo(e,'video2.webm')}}> Play Video 2</button>
      <button onClick={(e)={playVideo(e,'video3.webm')}}> Play Video 3</button>
      </div>
  );
};
      

export default App;
