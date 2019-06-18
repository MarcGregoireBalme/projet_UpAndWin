import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';


export default function DisplayQuizz() {
  const [value, setValue] = useState('');
  const [quizzes, setquizzes] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3005/quizzes/5d0764b1e3dfb9241fb360f6')
      .then((res) => {
        setquizzes(res.data);
      });
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (

    <div>
      <FormControl component="fieldset">
        {quizzes && quizzes.map((quizz, index) => (
          <div key={quizz._id}>
            <h1 key={quizz._id}>{quizz.titre}</h1>
            {console.log((quizz.qa).map((r => r)))
              }
            <FormLabel component="legend" color="inherit">{quizz.qa}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

              {(quizz.qa).filter(a => a % 2 === 1).map(qa => (
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
