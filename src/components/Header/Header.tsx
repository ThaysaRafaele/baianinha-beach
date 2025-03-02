/** @jsxImportSource @emotion/react */
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as styles from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header css={[styles.headerStyles, isScrolled && { background: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }]}>
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