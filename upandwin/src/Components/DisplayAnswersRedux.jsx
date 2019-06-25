import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';

const DisplayAnswers = ({ ans, dispatch }) => {
  const [value, setValue] = useState('');

  console.log(ans);

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch({
      type: 'GET_ANSWERS',
      answers: value,
    });
  };

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
};

const mapStateToProps = function answers(state) {
  console.log('mstp', state);
  return { state };
};


export default connect(mapStateToProps)(DisplayAnswers);
