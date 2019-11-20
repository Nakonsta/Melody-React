import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameTime, errorCount} = props;
      return <WelcomeScreen
        time = {gameTime}
        errorCount = {errorCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }
    const {questions} = props;
    return <GenreQuestionScreen
      question = {questions[question]}
      onAnswer = {onUserAnswer}
    />;
  }
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {gameTime, errorCount, questions} = this.props;
    const {question} = this.state;
    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => ({
        question: prevState.question + 1,
      }));
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.array
};

export default App;


//
