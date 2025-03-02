import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-image: url(/praia2.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;



export const CartItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const CartItemContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  align-items: center;
  text-align: center;  
  color: white;

  .cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  .total-price {
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

export const ItemImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 0.25rem;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  flex: 1;
  margin-top: 1rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.3rem;
    transition: 0.2s;
  
    &:hover {
      color: #f5c6cb;
    }
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.3rem;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ff6b6b;
  margin-left: 0.5rem;
  transition: 0.2s;  

  &:hover {
      color: #f44336;
    }
`;

export const TrashIcon = styled(FaTrash)`
  font-size: 18px;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

export const CartSummaryContainer = styled.div`
  padding: 20px;
  margin-bottom: 1.5rem;
  background-color: #fcedea;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ClearCartButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 12px 30px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CheckoutButton = styled.button`
  padding: 12px 30px;
  background-color: #ff1ad9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #b41499;
  }
`;

export const PaymentSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;

  label {
    font-size: 16px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px #ff1ad9, 0 0 10px rgb(255, 26, 217);
  }

  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: "Carrinho  ";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px #ff1ad9, 0 0 10px rgb(255, 26, 217);
  }

  &::after {
    content: "Vazio";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
  }
`;

export const ContinueShoppingButton = styled.button`
  padding: 12px 30px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    background-color: #138496;
  }
`;

export const ButtonContainer = styled.button` 
  display: flex;
  justify-content: space-between;
  align-items: flex-end;  
  flex-wrap: wrap;
`;
