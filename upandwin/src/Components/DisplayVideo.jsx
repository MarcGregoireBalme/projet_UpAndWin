/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import StarRating from './StarRating';

const reducer = (accumulator, currentValue) => accumulator + currentValue;


const opts = {
  height: 250,
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};


const DisplayVideo = ({ videos }) => {
  /* const _onReady = (event) => {
    event.target.pauseVideo();
  }; */

  const [a, setA] = useState('hello');

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  /* const videoStateChange = (event) => {
    const player = event.target;
    console.log(player.getCurrentTime(), 'state');
  }; */

  const videoOnPlay = (event) => {
    const player = event.target;
    if (player.getDuration() - player.getCurrentTime() < 20) {
      setA('quiz');
    } else {
      setA('Noquiz');
    }

    console.log(player.getCurrentTime(), a);
    console.log(player.getDuration(), 'durée');
  };

  const videoOnEnd = (event) => {
    const player = event.target;
    setA('New Quiz');

    console.log(player.getCurrentTime(), a);
    console.log(player.getDuration(), 'durée');
  };

  const getVideoId = url => url.split('/')[4];

  return (
    <div className="container-fluid">
      <div className="row videoDisplay">
        {videos/* .filter((x, id) => id < 4) */.map(video => (
          <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
            <h3>{video.titre}</h3>
            <h1>{a}</h1>
            <div>
              <StarRating moyenne={video.notes[0]
                ? video.notes.reduce(reducer) / (video.notes.length - 1)
                : 3}
              />
              <div className="nbVote">
                avis :
                {video.notes.length - 1}
                <div>
                  moyenne :
                  {video.notes[0]
                    ? video.notes.reduce(reducer) / (video.notes.length - 1)
                    : '2.5'}
                </div>
              </div>
            </div>
            <YouTube
              videoId={getVideoId(video.lien)}
              opts={opts}
              onReady={onPlayerReady}
              onPlay={videoOnPlay}
              onEnd={videoOnEnd}
            />

            {/* <iframe
            title={video.titre}
            width="100%"
            height="250px"
            src={video.lien}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default DisplayVideo;
