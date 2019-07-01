import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';


export default function DisplayQuiz() {
  const [value, setValue] = useState('');
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
            <h1 key={quiz._id}>{quiz.titre}</h1>

            <FormLabel component="legend" color="inherit">{quiz.question1}</FormLabel>
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

            <FormLabel component="legend" color="primary">{quiz.question2}</FormLabel>
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

            <FormLabel component="legend" color="primary">{quiz.question3}</FormLabel>
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

            <FormLabel component="legend" color="primary">{quiz.question4}</FormLabel>
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
