import styled from 'styled-components';

// Estilização da grid de produtos
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/praia2.jpg');
  background-size: cover;
  background-position: center;
`;

// Estilização do card de produto
export const ProductCardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-top: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #dcdcdc;
  text-align: center;
  margin-top: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(255, 26, 217);
  margin-top: 0.5rem;
  text-align: center;
  text-shadow: 0 0 1rem #ff1ad9, 0 0 1rem #0072b2;
`;

export const ColorsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

// Estilização da modal de produtos
export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background-color: #fcedea;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  &:hover {
    color: black;
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitleModal = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

export const ProductDescriptionModal = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(255, 26, 217);
  margin-top: 0.5rem;
`;

export const SizeSelector = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SizeButton = styled.button`
  border: 1px solid rgba(0, 114, 178, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border-color: rgb(0, 114, 178);
    background: rgb(0, 114, 178);
    color: white;
    box-shadow: 0 0 5px rgb(255, 26, 217), 0 0 5px rgb(255, 26, 217);
  }
  &.selected {
    background: rgb(0, 114, 178);
    color: white;
    border-color: rgb(0, 114, 178);
    box-shadow: 0 0 5px rgb(255, 26, 217), 0 0 5px rgb(255, 26, 217);
  }
`;

export const ColorSelector = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

export const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  &.selected {
    border: 3px solid rgb(0, 114, 178);
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const AddToCartButton = styled.button`
    width: 100%;
    background-color: #e5e5e5;
    color: #666;
    padding: 0.75rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 5px rgb(255, 26, 217), 0 0 10px rgb(255, 26, 217);
    &:hover {
    background-color: #cdd5d2;
    box-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
    }
`;
