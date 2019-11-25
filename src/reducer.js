const isArtistAnswerCorrect = (userAnswer, question) => (
  userAnswer.artist === question.song.artist
);

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));
