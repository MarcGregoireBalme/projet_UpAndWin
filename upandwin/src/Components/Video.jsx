/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import StarRating from './StarRating';


const reducer = (accumulator, currentValue) => accumulator + currentValue;


const opts = {
  height: 250,
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 2,
  },
};

const Video = ({ video }) => {
  const [a, setA] = useState('hello');

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  console.log(sessionStorage.getItem('user_id'), 'userID');


  const videoOnPlay = (event) => {
    const player = event.target;
    if (player.getDuration() - player.getCurrentTime() < 20) {
      const userId = sessionStorage.getItem('user_id');
      axios
        .put(`http://localhost:3005/userreceivequizz/${userId}`, {
          video_id: video._id,
          quizz_id: video.quizz_id,
        });
      setA('quiz');
    } else {
      setA('Noquiz');
    }
    console.log(video._id, 'vid');
    console.log(player.getCurrentTime(), a);
    console.log(player.getDuration(), 'durée');
  };

  const videoOnEnd = (event) => {
    const player = event.target;
    setA('New Quiz');
    console.log(player.getCurrentTime(), a);
    console.log(player.getDuration(), 'durée');
  };

  const getVideoId = (url) => {
    if (url.includes('embed')) {
      return url.split('/')[4];
    } if (url.includes('watch')) {
      return url.split('=')[1];
    }
    return url;
  };

  return (

    <div>
      <div className="marginVideo">
        <h4 className="overflow-clip">{video.titre}</h4>
        <h1>{a}</h1>
        <div>
          <StarRating moyenne={video.notes[0]
            ? video.notes.reduce(reducer) / (video.notes.length - 1)
            : 3}
          />
          <div className="nbVote">
            <div>
              moyenne :
              {(video.notes.length !== 0)
                ? Math
                  .round(video.notes
                    .reduce(reducer) / (video.notes.length - 1) * 100) / 100
                : '2.5'}
            </div>
            <button type="button">
              avis :
              {video.notes.length - 1}
            </button>
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
    </div>

  );
};


export default Video;
