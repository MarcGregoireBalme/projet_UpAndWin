/* eslint-disable no-underscore-dangle */
import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from './Video';

const DisplayVideo = ({ videos }) => (
  <div className="container-fluid">
    <div className="row videoDisplay">
      {videos/* .filter((x, id) => id < 4) */.map(video => (
        <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
          <Video video={video} />
        </div>
      ))}
    </div>
  </div>
);


export default DisplayVideo;
