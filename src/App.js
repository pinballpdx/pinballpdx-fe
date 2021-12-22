import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './views/Rules';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './views/News';
import Standings from './views/Standings';
import Schedule from './views/Schedule';
import Teams from './views/Teams';
import About from './views/About';

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-800 text-gray-100 items-center">
      <Header />
      <div className="flex flex-col flex-grow lg:flex-row w-full max-w-screen-lg">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        {/* <Main /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
