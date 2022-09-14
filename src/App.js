// import logo from './logo.svg';
import './App.css';
import StyledButton from './components/Buttons/Button';


function App() {
	return (
		<div className="App">
			{/* <button>Button</button> */}
			<StyledButton>Styled  Button</StyledButton>
			<div>
				<br />
			</div>
			<StyledButton variant='outline'>Styled  Button</StyledButton>
		</div>
	);
}

export default App;
