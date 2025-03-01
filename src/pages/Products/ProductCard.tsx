import { useState } from 'react';
import ProductModal from './ProductModal';
import { ProductCardProps } from './types';
import { ColorCircle, ColorsContainer, ProductCardContainer, ProductDescription, ProductPrice, ProductTitle } from './styles';

const ProductCard = ({ product }: ProductCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <>
        <ProductCardContainer
          onClick={() => setIsModalOpen(true)}
        >
          <div className="aspect-square overflow-hidden">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(product.price)}
            </ProductPrice>
          </div>
          
          {product.colors && product.colors.length > 0 && (
            <ColorsContainer>
              {product.colors.map((color) => (
                <ColorCircle key={color.value} color={color.hex} />
              ))}
            </ColorsContainer>
          )}
        </ProductCardContainer>
  
        <ProductModal 
          product={product} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </>
    );
  };
  
  export default ProductCard;
  
