/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
// import StarRating from './StarRating';
import Video from './Video';

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
const DisplayVideoHorizontal = ({ videos }) => (

  <div className="container-fluid">
    <div className="videoDisplayHorizontal">
      {videos.map(video => (
        <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12" style={{ minWidth: '320px' }}>
          <Video video={video} />
        </div>
      ))}
    </div>
  </div>
);

export default DisplayVideoHorizontal;
