import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl'; import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Displayquestioncopy from './DisplayQuestioncopy';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './DisplayQuizz.css';

export default function DisplayQuizz() {
  const [quizzes, setquizzes] = useState('');
  const [quizzesTodo, setquizzesTodo] = useState('');
  const [redirect, setredirect] = useState(false);

  useEffect(() => {
    localStorage.removeItem('q0');
    localStorage.removeItem('q1');
    localStorage.removeItem('q2');
    const quizzId = sessionStorage.getItem('quizz_id');
    const userId = sessionStorage.getItem('user_id');
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3005/quizzes/${quizzId}`,
      );
      const resTodo = await axios.get(
        `http://localhost:3005/usersquizztodo/${userId}`,
      );
      setquizzes(res.data);
      setquizzesTodo(resTodo.data);
    };
    fetchData();
  }, []);

  function arrayRemove(arr, value) {
    return arr.filter(ele => ele !== value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('user_id');
    axios
      .put(`http://localhost:3005/usersubmitquizz/${userId}`, {
        quizzAnswer: localStorage,
        quizz_id: quizzes[0]._id,
        quizz_idTodo: quizzesTodo && arrayRemove(quizzesTodo, sessionStorage.getItem('quizz_id')),
      });
    setredirect(true);
  };


  return (
    <div>
      <Topnav />
      <div className="Page">
        <h4>Réponds à ce petit questionnaire après avoir joué !</h4>
        <div>
          {redirect ? <Redirect to="/Fav" /> : redirect}
          <FormControl component="fieldset">
            {quizzes[0] && quizzes.map(quizz => (
              <div key={quizz._id}>
                <h1>{quizz.title}</h1>
                <Displayquestioncopy quizz={quizz} />
              </div>
            ))}
          </FormControl>
        </div>
        <button
          type="button"
          className="Button"
          onClick={handleSubmit}
        >
          Valider
        </button>

      </div>
      <BottomNav />
    </div>
  );
}
