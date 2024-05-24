import { React, useRef } from "react";

function TextInputWithFocusButton() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
	};

	return (
		<div>
			<input ref={inputEl} type="text" />
			<button onClick={onButtonClick}>Focus the input</button>
		</div>
	);
}

// onButtonClick puts the input field in focus. idk why this is useful though, maybe we'll come to know later.

export default TextInputWithFocusButton;
