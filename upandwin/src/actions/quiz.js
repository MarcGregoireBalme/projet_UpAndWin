import axios from 'axios';

import { ADD_QUIZ, SAVE_QUIZZES, UPDATE_LEADERBOARD } from '../constants/quiz';

const addQuizLocal = quiz => ({
  type: ADD_QUIZ,
  quiz,
});

export const saveNewQuiz = data => (dispatch) => {
  axios.post('/save-quiz', data).then((response) => {
    dispatch(addQuizLocal(data.quiz));
  }).catch(err => console.log(err));
};

const saveQuizzes = data => ({
  type: SAVE_QUIZZES,
  data,
});

export const getQuizzes = () => (dispatch) => {
  axios.get('/get-quizzes').then((response) => {
    const {data} = response;
    dispatch(saveQuizzes(data));
  });
};

export const submitScore = data => (dispatch) => {
  axios.post('/submit-score', data).then((response) => {
    dispatch(getLeaders());
  }).catch(err => console.log(err));
};

const updateLeaderboard = data => ({
  type: UPDATE_LEADERBOARD,
  data,
});

export const getLeaders = () => (dispatch) => {
  axios.get('/get-leaders').then((response) => {
    const {data} = response;
    dispatch(updateLeaderboard(data));
  }).catch(err => console.log(err));
};

export const updateQuiz = data => (dispatch) => {
  axios.post('/update-quiz', data).then((response) => {
    console.log(response);
  }).catch(err => console.log(err));
};
