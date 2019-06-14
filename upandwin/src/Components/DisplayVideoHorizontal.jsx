/* eslint-disable no-underscore-dangle */
import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';

const DisplayVideo = ({ videos }) => (

  <div className="container-fluid">
    <div className="videoDisplayHorizontal">
      {videos.map(video => (
        <div key={video._id} className="scrollHori">
          <h3>{video.titre}</h3>
          <iframe
            title={video.titre}
            width="320px"
            height="180px"
            src={video.lien}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  </div>
);

export default DisplayVideo;
