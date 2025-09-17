import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="acesso-ava">
        <RiRobot2Fill className="icon" />
        <span className="texto">Acesso ao AVA</span>
      </div>
      <div className="area-servidor">
        <span className="texto">Área do Servidor</span>
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;