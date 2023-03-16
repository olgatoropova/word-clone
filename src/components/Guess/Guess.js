import React from 'react';

import { GUESS_LENGTH } from '../../constants';

import { range } from '../../utils';

function Guess({ letters = [] }) {
	return (
		<p className="guess">
			{letters.map((item) => (
				<span key={crypto.randomUUID()} className={`cell ${item.status}`}>
					{item.letter}
				</span>
			))}
			{range(letters.length, GUESS_LENGTH).map((n) => (
				<span key={n} className="cell"></span>
			))}
		</p>
	);
}

export default Guess;
