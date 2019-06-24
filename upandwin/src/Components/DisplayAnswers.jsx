import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Displayquestions({ ans }) {
  const [value, setValue] = useState('');

  console.log(ans);


  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      {(ans.answers)
        .map((answer, id) => (
          <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
            <div>
              <FormControlLabel
                style={{ color: 'white' }}
                key={answer.id}
                value={`${ans.question} : ${answer}`}
                control={<Radio color="secondary" />}
                label={answer}
                labelPlacement="start"
              />
              {console.log(value)}
            </div>
          </RadioGroup>
        ))}
    </div>
  );
}
