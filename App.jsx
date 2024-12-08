import React from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'


    const App = () => {
    return (
      <div className="frameset">
        <Header />
        <Sidebar />
        <MainContent />
        <Footer />
      </div>
    );
  };
  


export default App
