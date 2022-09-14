import logo from './logo.svg';
import './App.css';
import './styles.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import StyledButton, { FancyButton, SubmitButton, AnimateLogo, DarkButton } from './components/Buttons/Button';;


const theme = {
	dark: {
		primary: '#222',
		text: '#eee'
	},
	light: {
		primary: '#eee',
		text: '#111',
	},
	fontFamily: "'Courier New', Courier, monospace",
}

// monstly used for resest css

const GlobalStyle = createGlobalStyle`
	button {
		font-family: ${(props) => props.theme.fontFamily};
	}
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className="App">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<AnimateLogo src={logo} />
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
				<div>
					<br />
				</div>
				<DarkButton>Dark Button</DarkButton>
			</div>
		</ThemeProvider>
	);
}

export default App;
