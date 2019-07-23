import React from 'react';
import { Link } from 'react-router-dom';


function buttonQ({ quizzID, quizz }) {
  const handleClick = () => {
    sessionStorage.setItem('quizz_id', quizzID);
  };

  return (
    <div>

      <Link to={`/quizz/${quizzID}`}>
        <button
          type="button"
          className="QuizButton"
          onClick={handleClick}
        >
          {(quizz
            .filter(obj => (obj._id === quizzID))
            .map(obj => obj.title))}
        </button>
      </Link>

    </div>

  );
}

export default buttonQ;
