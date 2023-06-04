import {
    Background, CarrinhoVazio, CarrinhoVazioContainer,
    ClearButton,
    CloseModalButton,
    ConfirmButton,
    ConfirmContainer,
    ContainerButtons,
    MinusButton,
    ModalHeader,
    ModalWrapper,
    PlusButton,
    Product,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
    PText, RightContainer,
    Row,
    Title
} from './styles'
import {useRef} from "react";

export const CartModal = ({isModalOpen, setIsModalOpen, cartProducts, clearCart, setCartProducts, setCounter, counter}) => {
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setIsModalOpen(false)
        } else {
            return null
        }
    }

    const {total, items} = cartProducts.reduce((acc, item) => {
        const price = parseFloat(item.product.price);
        acc.total += price * item.quantity;
        acc.items.push({
            product: item.product,
            quantity: item.quantity,
            price: price
        });
        return acc;
    }, {total: 0, items: []});

    const handleMinusButton = (index) => {
        const newCartProducts = cartProducts.map((p, i) => {
            if (i === index) {
                const newQuantity = p.quantity - 1
                if (newQuantity === 0) {
                    return null
                }
                return {product: p.product, quantity: newQuantity}
            }
            return p
        }).filter(Boolean);
        setCartProducts(newCartProducts)
        setCounter(counter - 1)
    }

    const handlePlusButton = (index) => {
        const newCartProducts = cartProducts.map((p, i) => {
            if (i === index) {
                return {product: p.product, quantity: p.quantity + 1}
            }
            return p
        });
        setCartProducts(newCartProducts)
        setCounter(counter + 1)
    }

    return (
        <>
            {isModalOpen && (
                <Background ref={modalRef} onClick={closeModal}>
                    {cartProducts.length !== 0 ? (
                        <ModalWrapper>
                            <ModalHeader>
                                <Title>Meu Carrinho</Title>
                                <CloseModalButton onClick={() => setIsModalOpen(false)}/>
                            </ModalHeader>
                            <Row>
                                <ProductList>
                                    {items.map((item, index) => (
                                        <Product key={index}>
                                            <ContainerButtons>
                                                <MinusButton onClick={() => handleMinusButton(index)}/>
                                                <PlusButton onClick={() => handlePlusButton(index)}/>
                                            </ContainerButtons>
                                            <ProductImage src={item.product.image} alt={item.product.title}/>
                                            <ProductTitle>({item.quantity}x) {item.product.title}</ProductTitle>
                                            <ProductPrice>Total: R$ {item.price * item.quantity}</ProductPrice>
                                            <PText>Quantidade: {item.quantity}</PText>
                                        </Product>
                                    ))}
                                </ProductList>
                                <RightContainer>
                                    <ConfirmContainer>
                                        <PText>Subtotal: R$ {total.toFixed(2)}</PText>
                                        <ConfirmButton>Fechar pedido</ConfirmButton>
                                    </ConfirmContainer>
                                    <ClearButton onClick={() => clearCart()}>Limpar Carrinho</ClearButton>
                                </RightContainer>
                            </Row>
                        </ModalWrapper>
                    ) : (
                        <ModalWrapper>
                            <ModalHeader>
                                <Title>Meu Carrinho</Title>
                                <CloseModalButton onClick={() => setIsModalOpen(false)}/>
                            </ModalHeader>
                            <CarrinhoVazioContainer>
                                <CarrinhoVazio>
                                    Seu carrinho está vázio
                                </CarrinhoVazio>

                            </CarrinhoVazioContainer>
                        </ModalWrapper>
                    )
                    }
                </Background>
            )}
        </>
    )
}