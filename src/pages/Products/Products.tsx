import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from './types';
import products from './data/products';
import { ProductsGrid } from './styles';

const Products = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    setProductsList(products);
  }, []);
  
  return (
    <ProductsGrid>
        {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </ProductsGrid>
  );
};

export default Products;