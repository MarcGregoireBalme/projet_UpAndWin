/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Link, NavLink, Redirect } from 'react-router-dom';
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
  const [inDB, setInDB] = useState(null);
  const [quizzExists, setQuizzExists] = useState([]);
  const [quizzButton, setQuizzButton] = useState('none');


  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  console.log(sessionStorage.getItem('user_id'), 'userID');

  useEffect(() => {
    const userId = sessionStorage.getItem('user_id');
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3005/usersquizztodo/${userId}`,
      );
      setQuizzExists(res.data);
    };
    fetchData();
  }, []);

  console.log(quizzExists);
  console.log(quizzButton, 'qb');

  const showQuizzButton = () => {
    if (quizzExists.includes(video.quizz_id)) {
      setQuizzButton('inline');
    }
  };


  useEffect(() => {
    showQuizzButton();
  });


  const videoOnPlay = (event) => {
    const player = event.target;
    const userId = sessionStorage.getItem('user_id');
    if (
      player.getDuration() - player.getCurrentTime() < 20
      && !quizzExists.includes(video.quizz_id) && !inDB
    ) {
      setInDB(1);
      axios.put(`http://localhost:3005/userreceivequizz/${userId}`, {
        video_id: video._id,
        quizz_id: video.quizz_id,
      });
      setA('quiz');
    } else {
      setA('Noquiz');
    }
    console.log(video._id, 'vid');
    console.log(video._id, 'quiz');
    console.log(player.getCurrentTime(), a);
    console.log(player.getDuration(), 'durée');
  };

  const videoOnEnd = (event) => {
    const player = event.target;
    const userId = sessionStorage.getItem('user_id');
    if (
      !quizzExists.includes(video.quizz_id) && !inDB
    ) {
      axios.put(`http://localhost:3005/userreceivequizz/${userId}`, {
        video_id: video._id,
        quizz_id: video.quizz_id,
      });
    } else {
      console.log('Quizz déjà en BDD');
    }
  };

  const handleClick = () => {
    sessionStorage.setItem('quizz_id', video.quizz_id);
  };

  const getVideoId = (url) => {
    if (url.includes('embed')) {
      return url.split('/')[4];
    }
    if (url.includes('watch')) {
      return url.split('=')[1];
    }
    return url;
  };

  return (
    <div>
      <div className="marginVideo">
        <h4 className="overflow-clip">{video.titre}</h4>
        <h5>{a}</h5>
        <div>
          <StarRating
            moyenne={
              video.notes[0]
                ? video.notes.reduce(reducer) / (video.notes.length - 1)
                : 3
            }
          />
          <div className="nbVote">
            <div>
              moyenne :
              {video.notes.length !== 0
                ? Math.round(
                  (video.notes.reduce(reducer) / (video.notes.length - 1))
                      * 100,
                ) / 100
                : '2.5'}
            </div>
            <button type="button">
avis :
              {video.notes.length - 1}
            </button>
            <button type="button" onClick={handleClick} style={{ display: quizzButton }}>
              <NavLink to={`/quizz/${video.quizz_id}`}>
              Quizz
              </NavLink>
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
