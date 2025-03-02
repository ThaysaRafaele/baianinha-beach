import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Header from "./components/Header/Header"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"


function App() {

  return (
    <CartProvider>
    <div className="flex flex-col">
      <Header />
        <main className="flex-grow min-h-screen pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </main>
      {/* <Footer /> */}
    </div>
    </CartProvider>
  )
}

export default App
