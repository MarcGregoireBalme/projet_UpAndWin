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
  const [redirect, setredirect] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'http://localhost:3005/quizzes/5d08ef30e3dfb9241fb360f7',
      );
      setquizzes(res.data);
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('user_id');
    axios
      .put(`http://localhost:3005/usersubmitquizz/${userId}`, {
        quizzAnswer: localStorage,
        quizz_id: quizzes[0]._id,
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
