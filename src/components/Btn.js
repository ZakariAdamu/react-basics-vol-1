function Btn() {
	const clickHandler = () => console.log("Clicked");
	const mouseOverHandler = () => console.log("mouse over");
	const handleClick = () => {
		let randomNum = Math.floor(Math.random() * 3) + 1;
		console.log(randomNum);
		let userInput = prompt("type a number");
		alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
	};
	return (
		<div>
			<button
				className="padding"
				style={{ margin: "30px" }}
				onClick={clickHandler}
			>
				Click me
			</button>
			<button className="padding" onMouseOver={mouseOverHandler}>
				Hover me
			</button>
			<button className="d-block padding" onClick={handleClick}>
				Guess the number between 1 and 3
			</button>
		</div>
	);
}

export default Btn;
