import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../hooks/useCart";
import {
    ButtonContainer,
  CartContainer,
  CartItemsContainer,
  CheckoutButton,
  ClearCartButton,
  ContinueShoppingButton,
  EmptyCartMessage,
  PaymentSelector,
} from "./styles";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    const savedPaymentMethod = localStorage.getItem("paymentMethod");
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      setPaymentMethod(""); 
      localStorage.removeItem("paymentMethod"); 
    }
  }, [cart]);

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPaymentMethod = e.target.value;
    setPaymentMethod(newPaymentMethod);
    localStorage.setItem("paymentMethod", newPaymentMethod); 
  };

  const generateWhatsAppLink = () => {
    const message = cart
      .map(
        (item) => `
      ${item.name}
      Quantidade: ${item.quantity}
      Tamanho: ${item.selectedSize || "Não informado"}
      Cor: ${item.selectedColor?.name || "Não informado"}
      Preço: R$ ${(item.price * item.quantity).toFixed(2)}
    `
      )
      .join("\n");

    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const formattedMessage = `
      Olá, gostaria de finalizar minha compra.
      
      ${message}

      Total da compra: R$ ${total.toFixed(2)}
      Forma de pagamento: ${paymentMethod}
    `;

    return `https://wa.me/556799238105?text=${encodeURIComponent(
      formattedMessage
    )}`;
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Por favor, selecione uma forma de pagamento.");
    } else {
      window.open(generateWhatsAppLink(), "_blank");
    }
  };

  const handleClearCart = () => {
    clearCart(); 
    setPaymentMethod(""); 
    localStorage.removeItem("paymentMethod"); 
  };

  return (
    <CartContainer>
      {cart.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
            <CartItemsContainer>
            {cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`} item={item} index={index} />
            ))}
            </CartItemsContainer>

            <CartSummary />      

            <ButtonContainer>
                <a href="/produtos">
                <ContinueShoppingButton>Continuar Comprando</ContinueShoppingButton>
                </a>
                
                <PaymentSelector>
                    <label>Escolha a forma de pagamento:</label>
                    <select
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    >
                    <option value="">Selecione</option>
                    <option value="Crédito">Crédito</option>
                    <option value="Débito">Débito</option>
                    <option value="Pix">Pix</option>
                    </select>
                </PaymentSelector>

                <CheckoutButton onClick={handleCheckout}>
                Finalizar Compra
                </CheckoutButton>

                <ClearCartButton onClick={handleClearCart}>
                Esvaziar Carrinho
                </ClearCartButton>
            </ButtonContainer>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
