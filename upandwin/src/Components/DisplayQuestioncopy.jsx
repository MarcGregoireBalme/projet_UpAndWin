import React, { useEffect } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import DisplayAnswerscopy from './DisplayAnswerscopy';

export default function Displayquestions({ quizz }) {
  useEffect(() => {
    localStorage.setItem('id', quizz._id);
  }, []);

  return (
    <div>
      {(quizz.qa)
        .map((ques, id) => (
          <div key={ques}>
            {ques.questions
              .map((question, ind) => (
                <div>
                  <div className="Divider" />
                  <FormLabel
                    component="legend"
                    style={{
                      color: 'white',
                      marginTop: '24px',
                    }}
                  >
                    <h2>{question.questionTitle}</h2>
                  </FormLabel>
                  <DisplayAnswerscopy ans={question} ind={ind} />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}
