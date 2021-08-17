import './App.css';
import emojiMap from './data';
import { useState } from 'react';

function App() {
	// return console.log(emojiMap);

	const [inputEmoji, setInputEmoji] = useState('');

	const emojis = Object.keys(emojiMap);

	const handleInputChange = (event) => {
		// This will update the state as well as view.
		setInputEmoji(event.target.value);
		console.log(inputEmoji);
	};

	const getEmojiName = () => {
		if (inputEmoji in emojiMap) {
			return emojiMap[inputEmoji];
		}
		return 'Emoji Not found in Database';
	};

	const handleEmojiClick = (emoji) => {
		setInputEmoji(emoji);
	};

	return (
		<>
			<h1> Emoji Identifier </h1>

			<input
				onChange={handleInputChange}
				type='text'
				placeholder='Enter or Select Emoji from the list to find meaning'
			/>

			<div>
				<span className='emoji-heading'>Emoji's Name</span> :{' '}
				<span className='emoji-content'>{getEmojiName()}</span>
			</div>

			<h1>Emoji's Supported</h1>
			<ul>
				{emojis.map((emoji, index) => (
					<li
						key={index}
						onClick={() => handleEmojiClick(emoji)}
						style={{
							listStyle: 'none',
							display: 'inline-block',
							padding: '1rem',
						}}>
						{emoji}
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
