import { useCart } from '../../hooks/useCart';
import { CartSummaryContainer } from './styles';

const CartSummary = () => {
  const { cart, getTotal } = useCart();

  return (
    <CartSummaryContainer>
      <h2>Resumo do Carrinho</h2>
      <div>
        <p>Total de Itens: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Total: R$ {getTotal().toFixed(2)}</p>
      </div>
    </CartSummaryContainer>
  );
};

export default CartSummary;
