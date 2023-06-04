import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { TbBrandReact } from 'react-icons/tb';

export const Container = styled.div`
  background: #FFE7CC;
  color: #181D31;
  padding: 26px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled(TbBrandReact)`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
`;

export const CartButton = styled(HiOutlineShoppingCart)`
  font-size: 32px;
  cursor: pointer;
`;

export const CartCounter = styled.p`
  font-size: 16px;
  color: #fff;
  background: #FC2947;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  position: relative;
  top: -20px;
  left: -8px;
`;

export const BuscarInput = styled.input`
  font-size: 14px;
  border-radius: 12px;
  width: 40%;
  font-weight: 700;
  outline: none;
  border: none;
  padding: 8px 12px;
`;