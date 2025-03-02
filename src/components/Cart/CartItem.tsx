import { CartItem as CartItemType } from "../../pages/Products/types";
import { useCart } from "../../hooks/useCart";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import {
  CartItemContainer,
  QuantityContainer,
  QuantityInput,
  RemoveButton,
} from "./styles";
import { ProductPrice } from "../../pages/Products/styles";

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
        <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
        <p><strong>Tamanho:</strong> {item.selectedSize}</p>
        {item.selectedColor && (
          <p>
            <strong>Cor:</strong> {item.selectedColor.name}{" "}
            <span
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                backgroundColor: item.selectedColor.hex,
                borderRadius: "50%",
                marginLeft: "5px",
                border: "1px solid #ccc",
              }}
            />
          </p>
        )}

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
      <ProductPrice>
        Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
      </ProductPrice>
    </CartItemContainer>
  );
};

export default CartItem;