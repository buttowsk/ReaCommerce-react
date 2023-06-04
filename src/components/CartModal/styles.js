import styled from "styled-components";
import {MdAddCircle, MdClose, MdRemoveCircle} from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(65, 53, 67, 0.5);
  position: absolute;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`
export const ModalWrapper = styled.div`
  width: 60%;
  min-height: 500px;
  max-height: 800px;
  box-shadow: 0 5px 16px rgba(65, 53, 67, 0.2);
  background: #F5E8E4;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10000;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  animation: slideIn 0.3s ease-in-out;
  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 8px 24px;
  border-bottom: 1px solid #411530;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #411530;
  font-weight: 700;
  margin: 8px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1 1 20%;
  width: 100%;
  max-height: 800px;
  padding: 8px 14px 8px 0;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Product = styled.div`
  background: #ffffff;
  padding: 0 12px;
  width: 210px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #0e759d;
  margin: 12px;
  border-radius: 8px;
`;

export const ConfirmContainer = styled.div`
  background: #ECF9FF;
  padding: 26px 12px;
  flex: 1 1 auto;
  width: 80%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #fff;
  margin: 8px;
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px 24px;
  position: relative;
`;

export const ConfirmButton = styled.button`
  background: #FC2947;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #FC2947;
    color: #EEE9DA;
    transform: scale(1.02)
  }
`;

export const PText = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  margin: 8px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: #411530;
  top: 15px;
  right: 12px;
  width: 32px;
  height: 32px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`

export const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
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

export const ProductPrice = styled.h3`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  margin: 8px;
`;

export const ClearButton = styled.button`
  background: #FC2947;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  top: 120px;
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #FC2947;
    color: #EEE9DA;
    transform: scale(1.1);
  }
`;

export const MinusButton = styled(MdRemoveCircle)`
  cursor: pointer;
  color: #D1512D;
  top: 15px;
  height: 22px;
  width: 22px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const PlusButton = styled(MdAddCircle)`
  cursor: pointer;
  color: #76BA99;
  top: 15px;
  height: 22px;
  width: 22px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px 24px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 8px 24px;
  position: relative;
`;

export const CarrinhoVazioContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8px 24px;
  position: relative;
`;

export const CarrinhoVazio = styled.h3`
  font-size: 32px;
  color: #411530;
  font-weight: 700;
  margin: 8px;
  text-align: center;
`;
