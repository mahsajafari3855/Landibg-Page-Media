import React from "react";
import TextArea from "./TextArea/TextArea";
import VideoContainer from "./VideoContainer";

const VideoArea = () => {
  return (
    <div id="video-area" className="fix home-2">
      <div className="container">
        <div className="row">
          <TextArea />
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
