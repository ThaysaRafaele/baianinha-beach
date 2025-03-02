import { CartItem } from "../pages/Products/types";

export interface CartContextType {
  cart: CartItem[]; 
  addToCart: (item: CartItem) => void;
  updateQuantity: (index: number, quantity: number) => void;
  removeFromCart: (index: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}
