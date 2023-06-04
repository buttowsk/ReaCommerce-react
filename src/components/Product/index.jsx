import {Container, ProducPrice, ProductTitle, ProductImage, AddProductButton, RemoveProductButton, ProductCounter, CounterContainer, AddtoCartButton} from './styles'
import {useState} from "react";


export const Product = ({image, price, title, id, handleAddCart}) => {
    const [counter, setCounter] = useState(0);

    return (
        <Container>
            <ProductImage src={image} alt={title} />
            <ProductTitle>{title}</ProductTitle>
            <ProducPrice>R$ {price}</ProducPrice>
            <CounterContainer>
                {counter > 0 && <RemoveProductButton onClick={() => setCounter(counter - 1)}/> }
                {counter > 0 && <ProductCounter>{counter}</ProductCounter>}
                <AddProductButton onClick={() => setCounter(counter + 1)}/>
            </CounterContainer>
            {counter > 0 && <AddtoCartButton onClick={() => handleAddCart({id: id, image: image, price: price, title: title}, counter, setCounter)}>Adicionar ao carrinho</AddtoCartButton>}
        </Container>
    );
}