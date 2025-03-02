import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useCart } from '../../hooks/useCart';
import { CartContainer, CartItemsContainer, CheckoutButton, ContinueShoppingButton, EmptyCartMessage } from './styles';

const Cart = () => {
  const { cart } = useCart();

  const generateWhatsAppLink = () => {
    const message = cart.map(item => `
      ${item.name}
      Quantidade: ${item.quantity}
      Tamanho: ${item.sizes || 'Não informado'}
      Cor: ${item.colors || 'Não informado'}
      Preço: R$ ${(item.price * item.quantity).toFixed(2)}
    `).join('\n');

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const formattedMessage = `
      Olá, gostaria de finalizar minha compra.
      
      ${message}

      Total da compra: R$ ${total.toFixed(2)}
      Forma de pagamento: [Escolher pagamento]
    `;

    const encodedMessage = encodeURIComponent(formattedMessage);
    return `https://wa.me/556799238105?text=${encodedMessage}`;
  };

  return (
    <CartContainer>
      {cart.length === 0 ? (
        <EmptyCartMessage>Carrinho vazio</EmptyCartMessage>
      ) : (
        <>
          <CartItemsContainer>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </CartItemsContainer>
          <CartSummary />
          <div>
            <a href="/produtos">
              <ContinueShoppingButton>Continuar Comprando</ContinueShoppingButton>
            </a>
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <CheckoutButton>Finalizar Compra</CheckoutButton>
            </a>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
