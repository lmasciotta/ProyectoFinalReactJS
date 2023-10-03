import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Tablets from './components/Tablets/Tablets';
import Smartphones from './components/Smartphones/Smartphones';
import Notebooks from './components/Notebooks/Notebooks';
import Details from './components/Details/Details';

function App() {
  const bodyStyle = {
    background: '#333'
  };

  return (
    <div className="App" style={bodyStyle}>
      <BrowserRouter>
        <div className="content-container">
        <NavBar />
        <h1>BIENVENIDO AL MEJOR MARKET DE TECNOLOGÍA</h1>
        <Routes>
          <Route path="/smartphones" element={<Smartphones/>} />
          <Route path="/tablets" element={<Tablets/>} />
          <Route path="/notebooks" element={<Notebooks/>} />
          <Route path="/components/Details/:id" element={<Details/>} />
        </Routes>
        <hr />
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
