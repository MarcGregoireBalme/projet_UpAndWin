/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
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
  const [quizzExists, setQuizzExists] = useState(['unEmpty']);
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
    if (quizzExists.length > 0 && quizzExists.includes(video.quizz_id)) {
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
      player.getDuration() - player.getCurrentTime() < 40
      && (!quizzExists.includes(video.quizz_id) || quizzExists.length === 0) && !inDB
    ) {
      setInDB(1);
      setQuizzButton('inline');
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
      showQuizzButton();
    } else {
      console.log('Quizz déjà en BDD');
    }
  };

  const handleClick = () => {
    sessionStorage.setItem('quizz_id', video.quizz_id);
  };

  const getVideoId = (lien) => {
    if (lien.includes('embed')) {
      return lien.split('/')[4];
    }
    if (lien.includes('watch')) {
      return lien.split('=')[1];
    }
    return lien;
  };

  return (
    <div>
      <div className="marginVideo">
        <h4 className="overflow-clip">{video.titre}</h4>
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
            <button className="quizzButton" type="button" onClick={handleClick} style={{ display: quizzButton }}>
              <NavLink to={`/quizz/${video.quizz_id}`}>
                Q
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <YouTube
        className="yt"
        videoId={getVideoId(video.lien)}
        opts={opts}
        onReady={onPlayerReady}
        onPause={videoOnPlay}
        onEnd={videoOnEnd}
      />
    </div>
  );
};

export default Video;
