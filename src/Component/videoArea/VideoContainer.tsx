import React from "react";

const VideoContainer = () => {
  return (
    <div className="col-lg-6 col-12">
      <div className="video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            src="https://player.vimeo.com/video/238480244?color=c7b299&title=0&byline=0&portrait=0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
