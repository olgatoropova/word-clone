import React from 'react';

import { KEYS } from '../../constants';

function Keyboard({ guessList }) {
	const lettersStatusMap = {};
	guessList.forEach((guess) => {
		guess.letters.forEach(({ letter, status }) => {
			// letter could be 'misplaced' in other words
			if (lettersStatusMap[letter] === 'correct') {
				return;
			}
			lettersStatusMap[letter] = status;
		});
	});

	return (
		<div className="keyboard">
			{KEYS.map((keyRow, index) => (
				<div className="keys-row" key={index}>
					{keyRow.map((key) => (
						<div className={`key ${lettersStatusMap[key]}`} key={key}>
							{key}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
