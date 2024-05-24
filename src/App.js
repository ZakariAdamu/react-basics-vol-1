import "./App.css";
import Header from "./components/Header";
import avatar from "./coursera-avatar.png";
import Card from "./components/Card";
import Btn from "./components/Btn";
import RegisterForm from "./components/RegisterForm";
import InputComponent from "./components/InputComponent";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";

function Logo(props) {
	const userPic = <img src={avatar} />;
	return userPic;
}

function App() {
	return (
		<div className="App">
			<Header firstName="Ruqayahmi" />
			<Btn />
			<InputComponent />
			<Logo />
			<RegisterForm />
			<TextInputWithFocusButton />
			<h1>Task: Add three Card elements</h1>
			<Card h2="First card's h2" h3="First card's h3" />
			<Card h2="Second card's h2" h3="Second card's h3" />
			<Card h2="Third card's h2" h3="Third card's h3" />
		</div>
	);
}

export default App;
