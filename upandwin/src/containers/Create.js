/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import history from '../History';

import { saveNewQuiz } from '../actions/quiz';


connect(
  dispatch => ({
    saveNewQuiz: bindActionCreators(saveNewQuiz, dispatch),
  }),
);

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        questions: [],
      },
      titleQuiz: '',
      review: false,
      reviewRequest: false,
      editQuizTitleState: false,
      editQuizTitle: '',
      editReview: new Map(),
      title: false,
      quizTitle: '',
      questionTitle: '',
      answers: [''],
      correctAnswer: null,
      submission: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setQuizTitle = this.setQuizTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addAnswerOption = this.addAnswerOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.submitAndContinue = this.submitAndContinue.bind(this);
    this.submitAndReview = this.submitAndReview.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.handleEditQuizTitle = this.handleEditQuizTitle.bind(this);
    this.submitTitleEdit = this.submitTitleEdit.bind(this);
    this.cancelTitleEdit = this.cancelTitleEdit.bind(this);
    this.submitQuestionEdit = this.submitQuestionEdit.bind(this);
    this.setCorrectAnswerEdit = this.setCorrectAnswerEdit.bind(this);
    this.handleOptionEdit = this.handleOptionEdit.bind(this);
    this.removeOptionEdit = this.removeOptionEdit.bind(this);
    this.addEditOption = this.addEditOption.bind(this);
    this.handleOptionTitleEdit = this.handleOptionTitleEdit.bind(this);
    this.reviewAddQuestion = this.reviewAddQuestion.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
  }

  componentDidMount() {
    { history.push('/'); }
    window.addEventListener('keydown', this.handleKeyPress);
  }

  setCorrectAnswer(idx) {
    this.setState({
      correctAnswer: idx,
    });
  }


  setQuizTitle() {
    const { quizTitle } = this.state;
    if (quizTitle !== '') {
      this.setState({
        titleQuiz: quizTitle,
        title: true,
      });
    }
  }

  setCorrectAnswerEdit(questionIdx, answerIdx) {
    const editQuestionID = `editQuestion${questionIdx}`;
    const editQuestion = this.state[editQuestionID];
    editQuestion.correctAnswer = answerIdx;
    this.setState({
      [editQuestionID]: editQuestion,
    });
  }

  cancelTitleEdit() {
    this.setState({
      editQuizTitleState: false,
      editQuizTitle: '',
    });
  }

  editQuestion(idx) {
    const { editReview, quiz } = this.state;
    editReview.set(idx, null);
    const question = quiz.questions[idx];
    const questionID = `editQuestion${idx}`;
    this.setState({
      [questionID]: question,
      editReview,
    });
  }

  handleOptionTitleEdit(questionIdx, event) {
    const editQuestionID = `editQuestion${questionIdx}`;
    const editQuestion = this.state[editQuestionID];
    editQuestion.questionTitle = event.target.value;
    this.setState({
      [editQuestionID]: editQuestion,
    });
  }

  handleOption(idx, event) {
    const { answers } = this.state;
    answers[idx] = event.target.value;
    this.setState({ answers });
  }

  addAnswerOption() {
    const { answers } = this.state;
    answers.push('');
    this.setState({ answers });
  }

  removeOption(idx) {
    const { answers } = this.state;
    if (answers.length > 1) {
      answers.splice(idx, 1);
      this.setState({ answers });
    }
  }

  submitTitleEdit() {
    const { editQuizTitle } = this.state;
    if (editQuizTitle !== '') {
      this.setState({
        editQuizTitleState: false,
        quizTitle: editQuizTitle,
        editQuizTitle: '',
      });
    }
  }

  handleEditQuizTitle() {
    const { quizTitle } = this.state;
    this.setState({
      editQuizTitleState: true,
      editQuizTitle: quizTitle,
    });
  }

  submitAndReview() {
    const {
      quiz, answers, correctAnswer, questionTitle,
    } = this.state;
    const filteredAnswers = answers.filter(answer => answer !== '');
    if (questionTitle !== '' && filteredAnswers.length > 1) {
      const question = {
        questionTitle,
        correctAnswer,
        answers: filteredAnswers,
      };
      quiz.questions.push(question);
      this.setState({
        quiz,
        questionTitle: '',
        answers: [''],
        correctAnswer: null,
        review: true,
      });
    }
  }

  submitAndContinue() {
    const {
      quiz, answers, correctAnswer, questionTitle,
    } = this.state;
    const filteredAnswers = answers.filter(answer => answer !== '');
    if (questionTitle !== '' && filteredAnswers.length > 1) {
      const question = {
        questionTitle,
        correctAnswer,
        answers: filteredAnswers,
      };
      quiz.questions.push(question);
      this.setState({
        quiz,
        questionTitle: '',
        answers: [''],
        correctAnswer: null,
        message: 'Question Added!',
      });
      setTimeout(() => { this.setState({ message: '' }); }, 3000);
    }
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleKeyPress(key) {
    if (key.keyCode === 9) {
      this.addAnswerOption();
    }
  }


  removeOptionEdit(questionIdx, answerIdx) {
    const editQuestionID = `editQuestion${questionIdx}`;
    const editQuestion = this.state[editQuestionID];
    if (editQuestion.answers.length > 1) {
      editQuestion.answers.splice(answerIdx, 1);
      if (editQuestion.correctAnswer > answerIdx) {
        editQuestion.correctAnswer -= 1;
      } else if (editQuestion.correctAnswer === answerIdx) {
        editQuestion.correctAnswer = null;
      }
      this.setState({
        [editQuestionID]: editQuestion,
      });
    }
  }

  handleOptionEdit(questionIdx, answerIdx, event) {
    const editQuestionID = `editQuestion${questionIdx}`;
    const editQuestion = this.state[editQuestionID];
    editQuestion.answers[answerIdx] = event.target.value;
    this.setState({
      [editQuestionID]: editQuestion,
    });
  }

  addEditOption(idx) {
    const editQuestionID = `editQuestion${idx}`;
    const editQuestion = this.state[editQuestionID];
    editQuestion.answers.push('');
    this.setState({
      [editQuestionID]: editQuestion,
    });
  }

  submitQuestionEdit(idx) {
    const editQuestionID = `editQuestion${idx}`;
    const editedQuestion = this.state[editQuestionID];
    const { quiz, editReview } = this.state;
    if (editedQuestion.answers.length > 1) {
      quiz.questions[idx] = editedQuestion;
      editReview.delete(idx);
      this.setState({
        quiz,
        editReview,
      });
    }
  }

  removeQuestion(idx) {
    const { quiz } = this.state;
    quiz.questions.splice(idx, 1);
    this.setState({ quiz });
  }

  reviewAddQuestion() {
    const { quiz } = this.state;
    quiz.questions.push({
      answers: [''],
      correctAnswer: null,
      questionTitle: '',
    });
    this.setState({ quiz });
    this.editQuestion(quiz.questions.length - 1);
  }

  saveQuiz() {
    const { quiz, title } = this.state;
    const { videoId } = this.props;
    console.log(videoId);
    axios
    .post('http://localhost:3005/save-quiz', {
      titre: title,
      questions: quiz,
      video_id: videoId,
      score: 10,
    })
    .then(res => this.setState({
      review: false,
      submission: true,
    }));
  } /*
      saveQuiz() {
        const { quiz } = this.state;
        if (quiz.questions.length > 0) {
          quiz.author = this.props.user;
          const payload = {
            user: this.props.user,
            token: this.props.token,
            quiz
          }
          this.props.saveNewQuiz(payload);
          this.setState({
            review: false,
            submission: true
          });
        }
    */

    render() {
      const { correctAnswer, answers } = this.state;
      const {
        title, review, quizTitle, submission,
        questionTitle, message, editQuizTitleState, editQuizTitle, quiz,
      } = this.state;
      const renderAnswers = answers.map((ans, idx) => (
        <div className="answerContainer" key={idx}>

          {correctAnswer === idx

            ? <i className="fa fa-check-box fa-check-square-o" aria-hidden="true" />

            : (
              <i
                id="checkBox"
                className="fa fa-check-box fa-square-o"
                aria-hidden="true"
                onClick={this.setCorrectAnswer.bind(this, idx)}
              />
            )}

          <input
            type="text"
            name={'answer_', {ans}}
          placeholder="Enter an Answer and Press Tab to Add Another"
          value={answers[idx]}
          onChange={this.handleOption.bind(this, idx)}
          className="answerInput"
        />
        <i
            onClick={this.removeOption.bind(this, idx)}
            className="fa fa-times"
            aria-hidden="true"
          />
        </div>
      ));
      return (

        <div className="createComponent">

          {!title && !review

            && (
              <div>
                <h1>Create a Quiz</h1>
                <p className="subtitle">You can create a new quiz here. Add as many questions as you want, you can always edit them later! However, after submission you cannot edit the quiz.</p>
                <p className="inputTitles">Enter a Title for Your Quiz:</p>
                <input
                  type="text"
                  name="quizTitle"
                  placeholder="Enter a Title"
                  value={quizTitle}
                  onChange={this.handleInput}
                  className="questionTitle"
                />
                <button
                  type="submit"
                  className="addOption"
                  onClick={this.setQuizTitle}
                >
                  Submit Title and Add Questions
  
              </button>
              </div>
            )}

          {title && !review && !submission

            && (
              <div className="createQuizContainer">
                <h1>Add Questions for Your Quiz:</h1>
                <p className="subtitle">Be sure to add at least two answers and check the box next to correct one!</p>
                <p className="inputTitles">Question:</p>
                <input
                  type="text"
                  name="questionTitle"
                  placeholder="Enter a Question"
                  value={questionTitle}
                  onChange={this.handleInput}
                  className="questionTitle"
                />
                <p className="inputTitles">Answers:</p>
                {renderAnswers}
                <button
                  type="submit"
                  className="addOption"
                  onClick={this.addAnswerOption}
                >
                  Add Another Option
  
              </button>
                <div className="proceedWrapper">
                  <button
                    type="submit"
                    className="proceedBtn"
                    onClick={this.submitAndContinue}
                  >
                    Submit and Add Another
  
                </button>
                  <button
                    type="submit"
                    className="proceedBtn"
                    onClick={this.submitAndReview}
                  >
                    Submit and Review
  
                </button>
                </div>
              </div>
            )}

          {!review && <p className="message">{message}</p>}

          {review

            && (
              <div>

                <h1 className="review">Review Your Quiz</h1>

                {!editQuizTitleState

                  ? (
                    <h2 className="quizTitleReview">
                      <i
                        onClick={this.handleEditQuizTitle}
                        className="fa fa-pencil-square-o fa-editQuestion"
                        aria-hidden="true"
                      />
                      Quiz Title:
                    {' '}
                      {quizTitle}
                    </h2>
                  )

                  : (
                    <div>
                      <h2>Edit Quiz Title:</h2>
                      <input
                        type="text"
                        name="editQuizTitle"
                        value={editQuizTitle}
                        onChange={this.handleInput}
                      />
                      <div className="editTitleWrapper">
                        <button type="submit" onClick={this.cancelTitleEdit} className="editBtn">Cancel Edit</button>
                        <button type="submit" onClick={this.submitTitleEdit} className="editBtn submitEdit">Submit Title Edit</button>
                      </div>
                    </div>
                  )}

                {quiz.questions.map((question, idx) => {
                  const { editReview } = this.state;
                  const { correctAnswer } = question;
                  if (editReview.has(idx)) {
                    const questionID = `editQuestion${idx}`;
                    return (
                      <div key={idx}>
                        <h2>
                          Editing Question
                        {' '}
                          {idx + 1}
                          :
                      </h2>
                        <p className="inputTitles">Edit Question Title:</p>
                        <input
                          type="text"
                          value={this.state[questionID].questionTitle}
                          onChange={this.handleOptionTitleEdit.bind(this, idx)}
                        />
                        <p className="inputTitles">Edit Question Answers:</p>
                        {question.answers.map((answer, index) => (
                          <div className="answerContainer" key={index}>

                            {this.state[questionID].correctAnswer === index

                              ? <i className="fa fa-check-box fa-check-square-o" aria-hidden="true" />

                              : (
                                <i
                                  id="checkBox"
                                  className="fa fa-check-box fa-square-o"
                                  aria-hidden="true"
                                  onClick={this.setCorrectAnswerEdit.bind(this, idx, index)}
                                />
                              )}

                            <input
                              type="text"
                              value={this.state[questionID].answers[index]}
                              onChange={this.handleOptionEdit.bind(this, idx, index)}
                              className="answerInput"
                            />
                            <i
                              onClick={this.removeOptionEdit.bind(this, idx, index)}
                              className="fa fa-times"
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                        <div className="editButtonsWrapper">
                          <button type="submit" onClick={this.addEditOption.bind(this, idx)} className="editBtn addOptionEdit">Add Another Option</button>
                          <button type="submit" onClick={this.submitQuestionEdit.bind(this, idx)} className="editBtn submitEdit">Submit Edit</button>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={idx}>
                      <p className="inputTitles">
                        Question
                      {' '}
                        {idx + 1}
                        :
                    </p>
                      <h2 className="questionTitleReview">
                        <i
                          onClick={this.editQuestion.bind(this, idx)}
                          className="fa fa-pencil-square-o fa-editQuestion"
                          aria-hidden="true"
                        />
                        <i
                          onClick={this.removeQuestion.bind(this, idx)}
                          className="fa fa-trash fa-editQuestion"
                          aria-hidden="true"
                        />
                        {question.questionTitle}
                      </h2>
                      <p className="inputTitles">Answers:</p>
                      {question.answers.map((answer, index) => {
                        let style = {
                          background: 'rgba(225,225,225,0.5)',
                        };
                        if (correctAnswer === index) {
                          style = {
                            background: '#06C1FF',
                          };
                        }
                        return (
                          <div className="answerReview" key={index} style={style}>
                            <p>{answer}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                {quiz.questions.length === 0 && <h2 className="errorMsg">You have to enter some questions to submit a new quiz!</h2>}

                <div className="reviewBtnControl">
                  <button type="submit" className="reviewAddBtn" onClick={this.reviewAddQuestion}>Add Another Question</button>
                  <button type="submit" className="saveBtn" onClick={this.saveQuiz}>Save and Submit Your Quiz</button>
                </div>

              </div>
            )

          }

          {submission

            && (
              <div className="submissionSuccess">
                <h1>Your quiz was submitted successfully!</h1>
                <h2>
                  Return to the
                {' '}
                  <Link to="quiz">Quizzes Page</Link>
                  {' '}
                  to view it and start studying.
              </h2>
              </div>
            )

          }

        </div>
      );
    }
  }

  export default Create;
