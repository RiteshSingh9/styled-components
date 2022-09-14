import styled from "styled-components";

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
    transition: all 0.5s ease - out;
`;
