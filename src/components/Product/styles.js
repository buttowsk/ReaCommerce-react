import styled from "styled-components";
import {MdAddCircle, MdRemoveCircle} from "react-icons/md";

export const Container = styled.div`
  background: #fff;
  padding: 26px 12px;
  width: 400px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #ECF9FF;
  margin: 8px;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  max-width: 320px;
  max-height: 220px;
  object-fit: contain;
  aspect-ratio: 3/2;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  margin: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 15ch;
`;

export const ProducPrice = styled.h3`
  font-size: 24px;
  color: #000;
  font-weight: 700;
  margin-top: 8px;
`;

export const AddProductButton = styled(MdAddCircle)`
  min-width: 24px;
  min-height: 24px;
  margin: 8px;
  font-size: 24px;
  color: #411530;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #76BA99;
  }
`;

export const RemoveProductButton = styled(MdRemoveCircle)`
  min-width: 24px;
  min-height: 24px;
  margin: 8px;
  font-size: 24px;
  color: #411530;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f81717;
  }
`;

export const ProductCounter = styled.span`
  font-size: 24px;
  color: #000000;
  font-weight: 700;
  text-align: center;
  margin: 4px;
  transition: all 0.3s ease-in-out;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const AddtoCartButton = styled.button`
  background: #F8CBA6;
  color: #000;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #D1512D;
    color: #000;
  }
`;