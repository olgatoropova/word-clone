import React from 'react';

function ResultBanner({ isUserWon, answer, guessesCount, handleRestart }) {
	const bannerStyle = isUserWon ? 'happy' : 'sad';
	return (
		<div className={`${bannerStyle} banner`}>
			{isUserWon && (
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>{guessesCount} guesses</strong>.
				</p>
			)}
			{!isUserWon && (
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			)}
			<button className="restart" onClick={handleRestart}>
				Restart
			</button>
		</div>
	);
}

export default ResultBanner;
