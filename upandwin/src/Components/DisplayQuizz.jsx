import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl'; import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
    axios
      .put('http://localhost:3005/usersubmitquizz/5d0399938c849e032612f5f0', { quizzAnswer: localStorage });
    console.log(localStorage, 'onclick');
  };


  return (
    <div>
      <div>
        <FormControl component="fieldset">
          {quizzes && quizzes.map(quizz => (
            <div key={quizz._id}>
              <h1>{quizz.title}</h1>
              <Displayquestion quizz={quizz} />
            </div>
          ))}
        </FormControl>
      </div>
      <Link to="/Fav">
        <Button style={{ paddingBottom: '10vh' }} variant="contained" className={classes.button} onClick={handleSubmit}>
        Valider
        </Button>
      </Link>
    </div>
  );
}
