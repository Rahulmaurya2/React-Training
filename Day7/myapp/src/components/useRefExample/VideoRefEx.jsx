import React, { useRef } from "react";

import "./videoRefEx.css";

const VideoRefEx = () => {
  const videoRef = useRef();

  const handlerPlay = () => {
    videoRef.current.play();
  };

  const handlerPause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <div id="main">
        <div className="btn-div">
          <button id="btn" onClick={handlerPlay}>
            Play
          </button>
          <button id="btn-1" onClick={handlerPause}>
            Pause
          </button>
        </div>
        <div className="videoBox">
          <video src="/Videos/video.mp4" ref={videoRef}></video>
        </div>
      </div>
    </>
  );
};

export default VideoRefEx;
