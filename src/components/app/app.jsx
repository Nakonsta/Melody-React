import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount, questions} = props;
  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    questions={questions}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};

export default App;
