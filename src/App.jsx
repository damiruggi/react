import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Fashion clothes" />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Bienvenidos a Fashion clothes" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </CartProvider>

    <Footer />
    </BrowserRouter>
  );
}





export default App;
