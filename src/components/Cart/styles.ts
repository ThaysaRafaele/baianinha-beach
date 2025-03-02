import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
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
    color: white;
    padding: 0.3rem;
    transition: 0.2s;

    &:hover {
      color: #ff6b6b;
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
  color: red;
  margin-left: 0.5rem;
  transition: 0.2s;

  &:hover {
    color: darkred;
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
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CheckoutButton = styled.button`
  padding: 12px 30px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ContinueShoppingButton = styled.button`
  padding: 12px 30px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #138496;
  }
`;
