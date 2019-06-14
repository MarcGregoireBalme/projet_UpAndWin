import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import RatingStar from './StarRating';


const DisplayVideo = ({ videos }) => (

  <div className="container-fluid">
    <div className="row videoDisplay">
      {videos.map(video => (
        <div key={video.titre} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
          <h3>{video.titre}</h3>
          <div>
            <RatingStar />
            <span className="nbVote">
              votes :
              {video.notes.length - 1}
            </span>
          </div>
          <iframe
            title={video.titre}
            width="100%"
            height="250px"
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
