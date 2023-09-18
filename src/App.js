import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/Footer/Footer';

function App() {
    const bodyStyle = {
    background: 'rgb(36,28,0) linear-gradient(90deg, rgba(36,28,0,1) 0%, rgba(245,199,32,1) 0%, rgba(168,168,165,1) 0%, rgba(196,196,196,1) 34%, rgba(156,154,147,1) 69%, rgba(218,218,216,1) 100%)',
    }
  return (
    <div className="App" style={bodyStyle}>
      <NavBar/>
      {<hr/>}
      <CardsList />
      <Footer />
    </div>
  );
}

export default App;
