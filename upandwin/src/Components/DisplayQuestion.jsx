import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import DisplayAnswers from './DisplayAnswers';


export default function Displayquestions({ quizz }) {
  return (
    <div>
      {(quizz.qa)
        .map((ques, id) => (
          <div key={ques}>
            <FormLabel
              component="legend"
              style={{ color: 'white' }}
            >
              {ques.question}
            </FormLabel>
            <DisplayAnswers ans={ques} />
          </div>
        ))}
    </div>
  );
}
