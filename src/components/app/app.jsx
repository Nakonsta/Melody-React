import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }
  render() {
    const {gameTime, errorCount, questions} = this.props;
    return <WelcomeScreen
      time={gameTime}
      errorCount={errorCount}
      onStartButtonClick = {() => {
        this.setState((prevState) => ({
          ...prevState,
          question: prevState.question + 1,
        }))
      }}
    />;
  }
}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.object
};

export default App;
