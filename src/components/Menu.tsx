import React, { useState } from 'react';
import './Menu.css';
import logo from '../assets/logosemed.png';
import { IoChevronDown, IoSearch } from 'react-icons/io5';

const Menu: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
    if (showSearchInput) {
      setSearchValue('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const gerenciaSubitens = [
    'Arte e Cultura',
    'Avaliação Escolar',
    'Biblioteca Escolar',
    'Busca Ativa',
    'CEAFRI-VV',
    'Educação Ambiental',
    'Educação de Jovens e Adultos',
    'Esportes Educacionais',
    'Educação Especial',
    'Educação Fundamental',
    'Educação Infantil',
    'Educação Integral',
    'Formação Continuada',
  ];

  const escolasSubitens = [
    'UMEFs',
    'UMEIs'
  ];

  return (
    <div className="menu">
      <div className="logo-container">
        <img src={logo} alt="Logo SEMED" className="logo" />
      </div>
      <div className="menu-items">
        <div className="item dropdown-item">
          <div className="item-header" onClick={() => toggleDropdown('gerencia')}>
            <span className="texto">Gerência de Ensino</span>
            <IoChevronDown className={`arrow ${openDropdown === 'gerencia' ? 'rotated' : ''}`} />
          </div>
          {openDropdown === 'gerencia' && (
            <div className="dropdown-menu">
              {gerenciaSubitens.map((subitem, index) => (
                <div key={index} className="dropdown-item">
                  {subitem}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="item dropdown-item">
          <div className="item-header" onClick={() => toggleDropdown('escolas')}>
            <span className="texto">Escolas</span>
            <IoChevronDown className={`arrow ${openDropdown === 'escolas' ? 'rotated' : ''}`} />
          </div>
          {openDropdown === 'escolas' && (
            <div className="dropdown-menu">
              {escolasSubitens.map((subitem, index) => (
                <div key={index} className="dropdown-item">
                  {subitem}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="item">
          <div className="item-header">
            <span className="texto">Documentos</span>
          </div>
        </div>
        <div className="item">
          <div className="item-header">
            <span className="texto">Outros</span>
          </div>
        </div>
        <div className="item search-item">
          <div className="item-header">
            {!showSearchInput ? (
              <IoSearch className="search-icon" onClick={toggleSearch} />
            ) : (
              <input
                type="text"
                className="search-input-inline"
                placeholder="Digite sua busca..."
                value={searchValue}
                onChange={handleSearchChange}
                onBlur={toggleSearch}
                autoFocus
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;