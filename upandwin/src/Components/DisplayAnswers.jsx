import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Displayquestions({ ans }) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      {(ans.answers)
        .map(answer => (
          <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
            <div>
              <FormControlLabel
                style={{ color: 'white' }}
                key={answer.id}
                value={`${answer} question ${ans.id}`}
                control={<Radio color="secondary" />}
                label={answer}
                labelPlacement="start"
              />
            </div>
          </RadioGroup>
        ))}
    </div>
  );
}
