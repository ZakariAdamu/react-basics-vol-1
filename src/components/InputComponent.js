import { React, useState } from "react";

function InputComponent() {
	const [inputText, setText] = useState("hello!");

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<div>
			<input value={inputText} onChange={handleChange} />
			<p>You typed: {inputText}</p>
			<button onClick={() => setText("hello!")}>Reset</button>
		</div>
	);
}

export default InputComponent;
