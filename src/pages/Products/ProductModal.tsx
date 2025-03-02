import { useState } from "react";
import { X } from "phosphor-react";
import { Color, ProductModalProps } from "./types";
import {
  AddToCartButton,
  CloseButton,
  ColorButton,
  ColorSelector,
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  Price,
  ProductDescriptionModal,
  ProductImage,
  ProductInfo,
  ProductTitleModal,
  QuantitySelector,
  SizeButton,
  SizeSelector,
} from "./styles";
import { useCart } from "../../hooks/useCart";

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho.");
      return;
    }
    if (!selectedColor) {
      alert("Por favor, selecione uma cor.");
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });

    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} weight="bold" />
        </CloseButton>
        <ModalContent>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductTitleModal>{product.name}</ProductTitleModal>
            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </Price>
            <ProductDescriptionModal>{product.description}</ProductDescriptionModal>

            <SizeSelector>
              {product.sizes.map((size) => (
                <SizeButton
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? "selected" : ""}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeSelector>

            {product.colors && product.colors.length > 0 && (
              <ColorSelector>
                {product.colors.map((color) => (
                  <ColorButton
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={selectedColor?.value === color.value ? "selected" : ""}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </ColorSelector>
            )}

            <QuantitySelector>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </QuantitySelector>

            <AddToCartButton onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </AddToCartButton>
          </ProductInfo>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ProductModal;
