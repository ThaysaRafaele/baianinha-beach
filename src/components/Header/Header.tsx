/** @jsxImportSource @emotion/react */
import { List, ShoppingCart, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as styles from "./styles";
import { useCart } from "../../hooks/useCart"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cart.length]);


  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/" },
  ];

  return (
    <header
      css={[
        styles.headerStyles,
        isScrolled && { background: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
      ]}
    >
      <div css={styles.container}>
        <Link to="/" css={styles.logo}>
          <styles.TitleContainer>
            <styles.Logo src="/Baianinha-logo.png" alt="Logo Baianinha Beach" />
            <styles.Title />
          </styles.TitleContainer>
        </Link>

        {/* Menu Desktop */}
        <nav css={styles.navDesktop}>
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} css={styles.navLink}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Botão do Menu Mobile */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} css={styles.menuButton}>
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Exibição do Carrinho no Header */}
        <div css={styles.cartContainer}>
          <Link to="/carrinho" css={styles.cartLink}>
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span css={styles.cartCount}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      <div css={styles.mobileMenu(isMenuOpen)}>
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} css={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;