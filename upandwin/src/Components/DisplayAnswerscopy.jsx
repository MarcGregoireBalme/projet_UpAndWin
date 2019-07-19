import React, { useState } from 'react';

export default function Displayquestions({ ans, ind }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem(`q${ind}`, event.target.value);
  };

  return (
    <div>
      {(ans.answers)
        .map(answer => (
          <div>
            <label htmlFor={answer} value={value} className="container">
              {answer}
              <input
                id={answer}
                type="checkbox"
                value={`${ans.questionTitle}/${answer}`}
                onChange={handleChange}
              />
              <span className="checkmark" />
            </label>

          </div>
        ))}
    </div>
  );
}
