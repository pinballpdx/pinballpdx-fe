import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <div class="flex flex-grow">
        <Nav />
        <main class="flex-grow">Main</main>
      </div>
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
