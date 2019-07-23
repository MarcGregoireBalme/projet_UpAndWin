/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import axios from 'axios';

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
    this.handleOptionEdit = this.handleOptionEdit.bind(this);
    this.addEditOption = this.addEditOption.bind(this);
    this.handleOptionTitleEdit = this.handleOptionTitleEdit.bind(this);
    this.reviewAddQuestion = this.reviewAddQuestion.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
  }

  componentDidMount() {
    // history.push('/');
    window.addEventListener('keydown', this.handleKeyPress);
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
      quiz, answers, questionTitle,
    } = this.state;
    const filteredAnswers = answers.filter(answer => answer !== '');
    if (questionTitle !== '' && filteredAnswers.length > 1) {
      const question = {
        questionTitle,
        answers: filteredAnswers,
      };
      quiz.questions.push(question);
      this.setState({
        quiz,
        questionTitle: '',
        answers: [''],
        review: true,
      });
    }
  }

  submitAndContinue() {
    const {
      quiz, answers, questionTitle,
    } = this.state;
    const filteredAnswers = answers.filter(answer => answer !== '');
    if (questionTitle !== '' && filteredAnswers.length > 1) {
      const question = {
        questionTitle,
        answers: filteredAnswers,
      };
      quiz.questions.push(question);
      this.setState({
        quiz,
        questionTitle: '',
        answers: [''],
        message: 'Question ajoutée !',
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
      questionTitle: '',
    });
    this.setState({ quiz });
    this.editQuestion(quiz.questions.length - 1);
  }

  saveQuiz() {
    const { quiz, titleQuiz } = this.state;
    const { videoId } = this.props;
    axios
      .post('http://localhost:3005/save-quiz', {
        title: titleQuiz,
        qa: quiz,
        video_id: videoId,
        score: 10,
      })
      .then(res => axios
        .put(`http://localhost:3005/addQuizzId/${videoId}`, {
          quizz_id: res.data,
        }),
      this.setState({
        review: false,
        submission: true,
      }));
  }

  render() {
    const { answers } = this.state;
    const {
      title, review, quizTitle, submission,
      questionTitle, message, editQuizTitleState, editQuizTitle, quiz,
    } = this.state;
    const renderAnswers = answers.map((ans, idx) => (
      <div className="Row" key={idx}>

        <input
          type="text"
          // eslint-disable-next-line no-sequences
          name={'answer_', { ans }}
          placeholder="Réponse"
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
              <h1>Ajouter un quiz à cette vidéo</h1>
              <div className="Row">
                Titre
                <input
                  type="text"
                  name="quizTitle"
                  placeholder="Titre"
                  value={quizTitle}
                  onChange={this.handleInput}
                  className="questionTitle"
                />
              </div>
              <div className="RowButton">
                <button
                  type="submit"
                  className="Button"
                  onClick={this.setQuizTitle}
                >
                  Étape suivante
                </button>
              </div>
            </div>
          )}

        {title && !review && !submission
          && (
            <div className="createQuizContainer">
              <h3>Ajouter des questions</h3>
              <div className="Row">
                Question
                <input
                  type="text"
                  name="questionTitle"
                  placeholder="Question ?"
                  value={questionTitle}
                  onChange={this.handleInput}
                  className="questionTitle"
                />
              </div>
              <div className="Row">
                Réponses
                {renderAnswers}
              </div>
              <div className="RowButton">
                <button
                  type="submit"
                  className="TertiaryButton"
                  onClick={this.addAnswerOption}
                >
                  Ajouter une réponse
                </button>
              </div>
              <div className="RowButton">
                <button
                  type="submit"
                  className="TertiaryButton"
                  onClick={this.submitAndContinue}
                >
                  Ajouter une question
                </button>
              </div>
              <div className="RowButton">
                <button
                  type="submit"
                  className="Button"
                  onClick={this.submitAndReview}
                >
                  Valider le quiz
                </button>
              </div>
            </div>
          )}

        {!review && <p className="message">{message}</p>}

        {review

          && (
            <div>

              <h1 className="review">Review du quiz</h1>

              {!editQuizTitleState
                ? (
                  <h2 className="Orange">
                    <i
                      onClick={this.handleEditQuizTitle}
                      className="fa fa-pencil-square-o fa-editQuestion"
                      aria-hidden="true"
                    />
                    {quizTitle}
                  </h2>
                ) : (
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
                    <h2 className="questionTitleReview">
                      <span className="Orange">
                        {idx + 1}
                        {' '}
                      </span>
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
                    {question.answers.map((answer, index) => {
                      const style = {
                        background: 'rgba(225,225,225,0.5)',
                      };
                      return (
                        <div className="answerReview" key={index} style={style}>
                          <p>{answer}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {quiz.questions.length === 0 && <h1 className="errorMsg">Votre quiz ne comporte aucune question !</h1>}

              <div className="reviewBtnControl">
                <button
                  type="submit"
                  className="Button"
                  onClick={this.saveQuiz}
                >
                  Valider le quiz
                </button>
                <button
                  type="submit"
                  className="SecondaryButton"
                  onClick={this.reviewAddQuestion}
                >
                  Modifier le quiz
                </button>
              </div>

            </div>
          )
        }

        {submission
          && (
            <div className="submissionSuccess">
              <h1>Quiz ajouté avec succès !</h1>
            </div>
          )
        }

      </div>
    );
  }
}

export default Create;
