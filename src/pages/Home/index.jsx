import {Header} from "../../components/Header/index.jsx";
import {Container} from "./styles";
import {Product} from "../../components/Product/index.jsx";
import {getProduct} from "../../hooks/getProduct";
import {useEffect, useState} from "react";
import {CartModal} from "../../components/CartModal/index.jsx";

export const Home = () => {
    const [cart, setCart] = useState(0)
    const [products, setProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState([])


    useEffect(() => {
        getProduct(12).then((results) => {
            setProducts([...results]);
        });
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    const handleAddCart = (product, quantity, setCounter) => {
        if (cartProducts.find((p) => p.product.id === product.id)) {
            const newCartProducts = cartProducts.map((p) => {
                if (p.product.id === product.id) {
                    return {product, quantity: p.quantity + quantity}
                }
                return p
            })
            setCartProducts(newCartProducts)
        } else {
            setCartProducts([...cartProducts, {product, quantity}])
        }
        setCart(cart + quantity)
        setCounter(0)
    }

    const clearCart = () => {
        setCartProducts([])
        setCart(0)
    }

    const cartModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <CartModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} cartProducts={cartProducts} setCartProducts={setCartProducts} clearCart={clearCart} counter={cart} setCounter={setCart}/>
            <Header cart={cart} cartModal={cartModal}/>
            <Container isModalOpen={isModalOpen}>
                {products.map((p)=> (
                    <Product key={p.id} desc={p.category} image={p.image} price={p.price} title={p.title} id={p.id}
                             handleAddCart={handleAddCart}
                    />
                ))}
            </Container>
        </>
    );
}