import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // const { getItemCount } = useCart();
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="font-display text-2xl font-bold text-primary">
              Baianinha Beach
            </Link>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `transition hover:text-primary ${isActive ? 'text-primary font-medium' : ''}`
                }
              >
                Início
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => 
                  `transition hover:text-primary ${isActive ? 'text-primary font-medium' : ''}`
                }
              >
                Sobre
              </NavLink>
              <NavLink 
                to="/produtos" 
                className={({ isActive }) => 
                  `transition hover:text-primary ${isActive ? 'text-primary font-medium' : ''}`
                }
              >
                Produtos
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => 
                  `transition hover:text-primary ${isActive ? 'text-primary font-medium' : ''}`
                }
              >
                Contato
              </NavLink>
            </nav>
  
            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* <Link to="/carrinho" className="relative p-1">
                <ShoppingCart size={24} weight="regular" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </Link> */}
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 md:hidden"
              >
                {isMenuOpen ? (
                  <X size={24} weight="regular" />
                ) : (
                  <List size={24} weight="regular" />
                )}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-60 mt-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink
                to="/produtos"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </NavLink>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;