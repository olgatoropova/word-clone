import React from 'react';

import { GUESS_LENGTH } from '../../constants';

function GuessInput({ handleAddToGuessList, disabled }) {
	const [guess, setGuess] = React.useState('');

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(e) => {
				e.preventDefault();
				handleAddToGuessList(guess);
				setGuess('');
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>

			<input
				id="guess-input"
				type="text"
				maxLength={GUESS_LENGTH}
				minLength={GUESS_LENGTH}
				pattern={`[a-zA-Z]{${GUESS_LENGTH}}`}
				title={`${GUESS_LENGTH} letter word`}
				disabled={disabled}
				required={true}
				autoFocus
				value={guess}
				onChange={(e) => {
					let nextGuess = e.target.value.toUpperCase();
					nextGuess =
						nextGuess.length > GUESS_LENGTH
							? nextGuess.substring(0, GUESS_LENGTH)
							: nextGuess;
					setGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
