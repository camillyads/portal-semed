import React from 'react';
import Layout from './Layout/Layout';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';

const App: React.FC = () => {

  return (
    <Layout
      header={<>
        <Header />
        <Menu />
      </>}
      body={<>
        <Banner />
      </>}
    />
  );
}

export default App;
