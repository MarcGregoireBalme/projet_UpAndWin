/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import StarRating from './StarRating';
import ModalRating from './ModalRating';


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const DisplayVideo = ({ videos }) => (

  <div className="container-fluid">
    <div className="row videoDisplay">
      {videos.map(video => (
        <div key={video.titre} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
          <h3>{video.titre}</h3>
          <div>
            <StarRating videoId={video._id} moyenne={video.notes.length !== 0 ? video.notes.reduce(reducer) / (video.notes.length - 1) : 3} />
            <div className="nbVote">
              <div>
                moyenne :
                {(video.notes.length !== 0)
                  ? Math.round(video.notes.reduce(reducer) / (video.notes.length - 1) * 100) / 100
                  : '2.5'}
              </div>
              <button type="button">
                avis :
                {video.notes.length - 1}
              </button>
            </div>
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
