import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.titile}</div>;
};

export default VideoDetail;
