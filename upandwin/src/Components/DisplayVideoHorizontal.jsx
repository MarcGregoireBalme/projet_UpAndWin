/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import StarRating from './StarRating';


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const DisplayVideo = ({ videos }) => (

  <div className="container-fluid">
    <div className="videoDisplayHorizontal">
      {videos.map(video => (

        <div key={video.titre} className="scrollHori">
          <h3>{video.titre}</h3>
          <div>
            <StarRating videoId={video._id} moyenne={(video.notes.length !== 0) ? video.notes.reduce(reducer) / (video.notes.length - 1) : 3} />
            <div className="nbVote">
              avis :
              {video.notes.length - 1}
              <div>
                moyenne :
                {(video.notes.length !== 0)
                  ? video.notes.reduce(reducer) / (video.notes.length - 1)
                  : '2.5'}
              </div>
            </div>
          </div>
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
