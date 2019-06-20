import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl'; import axios from 'axios';
import Displayquestion from './DisplayQuestion';


export default function DisplayQuizz() {
  const [quizzes, setquizzes] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'http://localhost:3005/quizzes/5d08ef30e3dfb9241fb360f7',
      );
      setquizzes(res.data);
    };
    fetchData();
  }, []);

  return (

    <div>
      <FormControl component="fieldset">
        {quizzes && quizzes.map(quizz => (
          <div key={quizz._id}>
            <h1>{quizz.title}</h1>
            <Displayquestion quizz={quizz} />
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
              </FormControl>

                    <FormControl component="fieldset">
        {quizzes && quizzes.map(quizz => (
          <div key={quizz._id}>
            <h1>{quizz.titre}</h1>
            {console.log((quizz.qa).filter((r, ind) => ind % 2 === 0))
              }
            <FormLabel component="legend" color="inherit">{quizz.qa.filter((r, ind) => ind % 2 === 0)}</FormLabel>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

              {(quizz.qa).filter((r, index) => index % 2 === 1).map(qa => (
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

              */}
    </div>
  );
}
