import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-800 text-gray-100 items-center">
      <Header />
      <div className="flex flex-col flex-grow lg:flex-row w-full max-w-screen-lg">
        <Nav />
        <Main />
      </div>
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
