import React from "react";

function VideoItem(props) {
  const video = props.video;
  return (
    <div className="card">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-body">
        <div className="card-title">{video.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
