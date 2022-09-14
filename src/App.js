import logo from './logo.svg';
import './App.css';
import './styles.css';
import StyledButton, { FancyButton, SubmitButton } from './components/Buttons/Button';;


function App() {
	return (
		<div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<animateLogo src={logo} />
			{/* <button>Button</button> */}
			<br />
			<StyledButton>Styled  Button</StyledButton>
			<div>
				<br />
			</div>
			<StyledButton variant='outline'>Styled  Button</StyledButton>
			<div>
				<br />
			</div>
			<FancyButton> Fancy Button</FancyButton>
			<div>
				<br />
			</div>
			{/* polymorphic props */}
			<FancyButton as='a'> Fancy Button as anchor tag</FancyButton>

			<div>
				<br />
			</div>
			<SubmitButton>Submit Button</SubmitButton>
		</div>
	);
}

export default App;
