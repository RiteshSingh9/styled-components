import styled, { keyframes } from "styled-components";

// adapting based on props  is one way to do that but has multiple checks and branching and hard to maintain

export const StyledButton = styled.button`
	border: 1px solid #4caf50;
	background-color: ${(props) => props.variant === 'outline' ? '#eee' : '#1FAA59'};
	color:  ${(props) => props.variant === 'outline' ? '#1FAA59' : '#eee'};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline - block;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &:hover {
	background-color: ${(props) => props.variant !== 'outline' ? '#eee' : '#1FAA59'};
	color:  ${(props) => props.variant !== 'outline' ? '#1FAA59' : '#eee'};
    }
`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #66AD47 0%, #FF6666 100%);
    border: none;
`;

// you can also pass a function to .attrs();
export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit',
})`
    box-shadow: 0 9px #999;

    &:hover {
        background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const AnimateLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} linear 10s infinite;
`;

export const DarkButton = styled(StyledButton)`
    border: 1px solid ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text}
`;