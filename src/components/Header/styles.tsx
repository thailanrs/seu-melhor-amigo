import styled from "styled-components";

export const Container = styled.div`
	background: #F0CEA0;
  	width: 100%;
  	height: 80px;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
`;

export const LogoContainer = styled.div`
  	margin-left: 50px;
  	width: 33%;
`;

export const Logo = styled.h1`
  	font-family: 'Amatic SC', cursive;
  	color: #534D41;
  	font-size: 2.5em;
  	text-transform: uppercase;
`;

export const Menu = styled.nav`
  	display: flex;
  	width: 33%;
  	justify-content: center;
`;

export const List = styled.ul`
	list-style: none;
`

export const Item = styled.li`
  	font-family: "Segoe UI", sans-serif;
  	color: #534D41;
  	font-size: 1em;
	display: inline-block;
  	text-transform: uppercase;
  	margin: 0 15px;
`

export const ButtonContainer = styled.div`
  	display: flex;
  	align-items: center;
  	justify-content: right;
  	margin-right: 50px;
  	width: 33%;
`

export const ButtonLogin = styled.div`
  	font-family: "Segoe UI", sans-serif;
  	font-size: 1em;
	margin-right: 15px;
`

export const ButtonSignIn = styled.div`
  	font-family: "Segoe UI", sans-serif;
	font-size: 1em;
	background: #534D41;
  	color: #fff;
  	padding: 10px 25px;
  	border-radius: 20px;
`

export const LinkStyle = {
	borderRadius: '5px'
}