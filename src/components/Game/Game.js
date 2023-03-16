import React from 'react';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import ResultBanner from '../ResultBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
	const [answer, setAnswer] = React.useState(generateNextAnswer);
	const [guessList, setGuessList] = React.useState([]);
	const [isUserWon, setIsUserWon] = React.useState(false);

	function generateNextAnswer() {
		const nextAnswer = sample(WORDS);
		console.info('Answer: ', nextAnswer);
		return nextAnswer;
	}

	function handleRestart() {
		const nextAnswer = generateNextAnswer();
		setAnswer(nextAnswer);
		setGuessList([]);
		setIsUserWon(false);
	}

	function addToGuessList(guess) {
		if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
			return;
		}
		const letters = checkGuess(guess, answer);

		setIsUserWon(letters.every((letter) => letter.status === 'correct'));

		const nextGuessList = [
			...guessList,
			{
				letters,
				id: crypto.randomUUID()
			}
		];
		setGuessList(nextGuessList);
	}
	const isGameOver = isUserWon || guessList.length >= NUM_OF_GUESSES_ALLOWED;

	return (
		<>
			<GuessList guessList={guessList} />
			<GuessInput handleAddToGuessList={addToGuessList} disabled={isGameOver} />
			<Keyboard guessList={guessList} />
			{isGameOver && (
				<ResultBanner
					isUserWon={isUserWon}
					answer={answer}
					guessesCount={guessList.length}
					handleRestart={handleRestart}
				/>
			)}
		</>
	);
}

export default Game;
