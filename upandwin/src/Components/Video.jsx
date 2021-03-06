/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StarRating from './StarRating';
import AddToFav from './AddToFav';

const opts = {
  height: 250,
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 2,
  },
};

const Video = ({ video }) => {
  const [inDB, setInDB] = useState(null);
  const [quizzExists, setQuizzExists] = useState(['unEmpty']);
  const [quizzButton, setQuizzButton] = useState('none');
  const [nbVues, setNbVues] = useState(0);

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  // console.log(sessionStorage.getItem('user_id'), 'userID');

  useEffect(() => {
    const userId = sessionStorage.getItem('user_id');
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3005/usersquizztodo/${userId}`,
      );
      setQuizzExists(res.data);
      const result = await axios.get(
        `http://localhost:3005/nbvues/${video._id}`,
      );
      setNbVues(result.data);
    };
    fetchData();
  }, []);

  const showQuizzButton = () => {
    if (quizzExists.length > 0 && quizzExists.includes(video.quizz_id)) {
      setQuizzButton('inline');
    }
  };

  useEffect(() => {
    showQuizzButton();
  });

  const videoOnPause = (event) => {
    const player = event.target;
    const userId = sessionStorage.getItem('user_id');
    if (sessionStorage.getItem('user_id') !== null) {
      if (
        player.getDuration() - player.getCurrentTime() < 40
        && (!quizzExists.includes(video.quizz_id) || quizzExists.length === 0)
        && !inDB
      ) {
        setInDB(1);
        setNbVues(nbVues + 1);
        setQuizzButton('inline');
        axios.put(`http://localhost:3005/userreceivequizz/${userId}`, {
          video_id: video._id,
          quizz_id: video.quizz_id,
        });
        axios.put(`http://localhost:3005/nbvues/${video._id}`, {});
      }
    }
  };

  const videoOnEnd = (event) => {
    const player = event.target;
    const userId = sessionStorage.getItem('user_id');
    if (sessionStorage.getItem('user_id') !== null) {
      if (!quizzExists.includes(video.quizz_id) && !inDB) {
        axios.put(`http://localhost:3005/userreceivequizz/${userId}`, {
          video_id: video._id,
          quizz_id: video.quizz_id,
        });
        axios.put(`http://localhost:3005/nbvues/${video._id}`, {});
        showQuizzButton();
        setNbVues(nbVues + 1);
      }
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
      <div className="Video">
        <YouTube
          videoId={getVideoId(video.lien)}
          opts={opts}
          onReady={onPlayerReady}
          onPause={videoOnPause}
          onEnd={videoOnEnd}
        />
        <h2>{video.titre}</h2>
        {sessionStorage.getItem('user_id') !== null ? (
          <>
            <div className="VideoInfos">
              <StarRating video={video} vue={nbVues} />
              <AddToFav vId={video._id} />
            </div>
            <div>
              <NavLink to={`/quizz/${video.quizz_id}`}>
                <button
                  className="QuizButton"
                  type="button"
                  onClick={handleClick}
                  style={{ display: quizzButton }}
                >
                  Faire le quiz
                </button>
              </NavLink>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

function mstp(state) {
  return { ...state };
}

export default connect(mstp)(Video);
