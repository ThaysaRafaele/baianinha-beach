import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
// import Header from "./components/Header"


function App() {

  return (
    <div className="flex flex-col">
      {/* <Header /> */}
        <main className="flex-grow min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
          </Routes>
        </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
