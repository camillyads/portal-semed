import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <Menu />
      
      <main className="main-content">
        <section className="hero-section">
        </section>
      </main>
    </div>
  );
}

export default App;
