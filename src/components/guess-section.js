import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
      <GuessCount guessCount={guessCount} />
    </section>
  );
}
