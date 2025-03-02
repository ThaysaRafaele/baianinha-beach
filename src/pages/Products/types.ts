export interface Color {
    name: string;
    value: string;
    hex: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    sizes: string[];
    colors?: Color[];
  }
  
  export interface ProductModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface ProductCardProps {
    product: Product;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  