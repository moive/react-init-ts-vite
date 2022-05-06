import styled from "styled-components";

type Props = {
	color?: string;
};

const setTimeTransition = (t: string) => `all ${t} ease-in-out`;

let mainColor = "#db7093",
	mainAlphaColor80 = "#db709380";

const MyH3 = styled.h3`
	color: ${(props) => (props.color ? props.color : "rgb(99, 102, 241)")};
	margin: 2rem;
	padding: 2rem;
	text-align: center;
	background-color: ${mainColor};
	width: 100%;
	transition: ${setTimeTransition("0.5s")};
	&:hover {
		background-color: ${mainAlphaColor80};
	}
`;

const StyledComponents = ({ color }: Props) => {
	return <MyH3>StyledComponents</MyH3>;
};

export default StyledComponents;
