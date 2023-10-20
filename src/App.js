import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Tablets from './components/Tablets/Tablets';
import Smartphones from './components/Smartphones/Smartphones';
import Notebooks from './components/Notebooks/Notebooks';
import Details from './components/Details/Details';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  
  return (
    <div className="App">
    <CartProvider>  
      <BrowserRouter>
        <div className="content-container">
        <NavBar />
        <h1>BIENVENIDO AL MEJOR MARKET DE TECNOLOGÍA</h1>
        <Routes>
          <Route path="/celulares" element={<Smartphones/>} />
          <Route path="/tablets" element={<Tablets/>} />
          <Route path="/notebooks" element={<Notebooks/>} />
          <Route path="/:categoria/Details/:id" element={<Details />} />
          <Route path="/carrito" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <hr />
        <Footer />
        </div>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
