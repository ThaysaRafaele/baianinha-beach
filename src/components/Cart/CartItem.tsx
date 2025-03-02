import { CartItem as CartItemType } from "../../pages/Products/types";
import { useCart } from "../../hooks/useCart";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { CartItemContainer, QuantityContainer, QuantityInput, RemoveButton } from "./styles";

interface CartItemProps {
  item: CartItemType;
  index: number;
}

const CartItem = ({ item, index }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(index, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(index, item.quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(index);
  };

  return (
    <CartItemContainer>
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>R$ {item.price.toFixed(2)}</p>
        <QuantityContainer>
          <button onClick={handleDecrease}>
            <FaMinus />
          </button>
          <QuantityInput type="number" min="1" value={item.quantity} readOnly />
          <button onClick={handleIncrease}>
            <FaPlus />
          </button>
          <RemoveButton onClick={handleRemoveItem}>
            <FaTrash />
          </RemoveButton>
        </QuantityContainer>
      </div>
      <p className="total-price">Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
    </CartItemContainer>
  );
};

export default CartItem;