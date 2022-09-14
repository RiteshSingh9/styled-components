// import logo from './logo.svg';
import './App.css';
import StyledButton, { FancyButton } from './components/Buttons/Button';


function App() {
	return (
		<div className="App">
			{/* <button>Button</button> */}
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
		</div>
	);
}

export default App;
