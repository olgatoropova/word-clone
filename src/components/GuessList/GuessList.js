import React from 'react';
import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { range } from '../../utils';

function GuessList({ guessList }) {
	return (
		<div className="guess-results">
			{guessList.map(({ id, letters }) => (
				<Guess key={id} letters={letters} />
			))}
			{range(guessList.length, NUM_OF_GUESSES_ALLOWED).map((n) => (
				<Guess key={n} />
			))}
		</div>
	);
}

export default GuessList;
