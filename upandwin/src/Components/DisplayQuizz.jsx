import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl'; import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Displayquestion from './DisplayQuestion';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function DisplayQuizz() {
  const [quizzes, setquizzes] = useState('');
  const [quizzesTodo, setquizzesTodo] = useState('');
  const [redirect, setredirect] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    localStorage.removeItem('q0');
    localStorage.removeItem('q1');
    localStorage.removeItem('q2');
    const quizzId = sessionStorage.getItem('quizz_id');
    const userId = sessionStorage.getItem('user_id');
    const fetchData = async () => {
      const res = await axios.get(
        `/quizzes/${quizzId}`,
      );
      const resTodo = await axios.get(
        `/usersquizztodo/${userId}`,
      );
      setquizzes(res.data);
      setquizzesTodo(resTodo.data);
    };
    fetchData();
  }, []);

  function arrayRemove(arr, value) {
    return arr.filter(ele => ele !== value);
  }

  console.log(quizzesTodo, 'qtd');
  console.log(quizzesTodo && arrayRemove(quizzesTodo, sessionStorage.getItem('quizz_id')));

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('user_id');
    axios
      .put(`/usersubmitquizz/${userId}`, {
        quizzAnswer: localStorage,
        quizz_id: quizzes[0]._id,
        quizz_idTodo: quizzesTodo && arrayRemove(quizzesTodo, sessionStorage.getItem('quizz_id')),
      });
    setredirect(true);
  };


  return (
    <div>
      <div>
        {redirect ? <Redirect to="/Fav" /> : redirect}
        <FormControl component="fieldset">
          {quizzes && quizzes.map(quizz => (
            <div key={quizz._id}>
              <h1>{quizz.title}</h1>
              <Displayquestion quizz={quizz} />
            </div>
          ))}
        </FormControl>
      </div>
      <Button style={{ paddingBottom: '10vh' }} variant="contained" className={classes.button} onClick={handleSubmit}>
        Valider
      </Button>

    </div>
  );
}
