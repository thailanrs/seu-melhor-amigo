import {ButtonContainer, ButtonLogin, ButtonSignIn, LogoContainer, Container, Item, List, Logo, Menu} from "./styles";

function Header() {
    return (
	    <Container>
		    <LogoContainer>
		        <Logo>Seu melhor amigo</Logo>
		    </LogoContainer>
		    <Menu>
			    <List>
				    <Item>Animais</Item>
				    <Item>Sobre</Item>
				    <Item>Contato</Item>
			    </List>
		    </Menu>
		    <ButtonContainer>
			    <ButtonLogin>Login</ButtonLogin>
			    <ButtonSignIn>Sign In</ButtonSignIn>
		    </ButtonContainer>
		</Container>
    )
}

export default Header;