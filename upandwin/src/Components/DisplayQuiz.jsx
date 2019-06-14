/* import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Displayquiz = () => (

  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }
return( <div className="container-fluid">
    <div className="row quizDisplay">
      <h2>Quiz n°1</h2>
      <h3>Combien de fois as-tu joué ce champion ?</h3>

    </div>
  </div>
);
)

export default Displayquiz; */

import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';


export default function DisplayQuiz() {
  const [value, setValue] = useState('female');
  const [quizs, setquizs] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3005/quizzs')
      .then((res) => {
        setquizs(res.data);
      });
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (

    <div>
      <FormControl component="fieldset">
        {quizs && quizs.map((quiz, index) => (
          <div>
            <h1>{quiz.titre}</h1>
            <FormLabel component="legend" color="inherit" key={quiz._id}>{quiz.question1}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
              {quiz.answer1.map(qa => (
                <FormControlLabel
                  value={qa}
                  control={<Radio color="primary" />}
                  label={qa}
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>

            <FormLabel component="legend" color="inherit" key={quiz._id}>{quiz.question2}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

              {quiz.answer2.map(qa => (
                <FormControlLabel
                  value={qa}
                  control={<Radio color="primary" />}
                  label={qa}
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>

            <FormLabel component="legend" color="inherit" key={quiz._id}>{quiz.question3}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

              {quiz.answer3.map(qa => (
                <FormControlLabel
                  value={qa}
                  control={<Radio color="primary" />}
                  label={qa}
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>

            <FormLabel component="legend" color="inherit" key={quiz._id}>{quiz.question4}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

              {quiz.answer4.map(qa => (
                <FormControlLabel
                  value={qa}
                  control={<Radio color="primary" />}
                  label={qa}
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>
          </div>
        ))}

      </FormControl>

      {/* <FormControl component="fieldset">
        <FormLabel component="legend" color="inherit">Combien de fois as-tu joué ce champion?</FormLabel>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
          <FormControlLabel
            value="moins de 5"
            control={<Radio color="primary" />}
            label="moins de 5"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5-10"
            control={<Radio color="primary" />}
            label="5-10"
            labelPlacement="start"
          />
          <FormControlLabel
            value="10-15"
            control={<Radio color="primary" />}
            label="10-15"
            labelPlacement="start"
          />
          <FormControlLabel
            value="15+"
            control={<Radio color="primary" />}
            label="15+"
            labelPlacement="start"
          />
        </RadioGroup>
              </FormControl> */}
    </div>
  );
}


/*  <div className="container-fluid">
    <div className="row quizDisplay">
      {quizs.map(quiz => (
        <div key={quiz.titre} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
          <h3>{quiz.titre}</h3>
          <iframe
            title={quiz.title}
            width="100%"
            height="250px"
            src={quiz.lien}
          />
        </div>
      ))}
    </div>
  </div> */
