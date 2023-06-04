import {Cart, CartButton, Logo, CartCounter, Container, BuscarInput, LogoContainer, LogoImage} from "./styles";

export const Header = ({cart, cartModal}) => {
    return (
        <Container>
            <LogoContainer>
                <LogoImage/>
                <Logo>ReaCommerce</Logo>
            </LogoContainer>
            <BuscarInput placeholder="Buscar" />
            <Cart>
                <CartButton onClick={cartModal}/>
                <CartCounter>{cart}</CartCounter>
            </Cart>
        </Container>
    );
}