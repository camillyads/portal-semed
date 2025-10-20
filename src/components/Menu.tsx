import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import logo from '../assets/logosemed.png';
import { IoChevronDown, IoSearch } from 'react-icons/io5';

const Menu: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Refs separadas para cada dropdown
  const gerenciaRef = useRef<HTMLDivElement>(null);
  const escolasRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Fecha se o clique for fora de ambos os dropdowns
      if (
        gerenciaRef.current &&
        escolasRef.current &&
        !gerenciaRef.current.contains(target) &&
        !escolasRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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

  const escolasSubitens = ['UMEFs', 'UMEIs'];

  return (
    <div className="menu">
      <div className="logo-container">
        <img src={logo} alt="Logo SEMED" className="logo" />
      </div>

      <div className="menu-items">

        {/* Dropdown Gerência */}
        <div className="item dropdown-item" ref={gerenciaRef}>
          <div
            className="item-header"
            onClick={() => toggleDropdown('gerencia')}
          >
            <span className="texto">Gerência de Ensino</span>
            <IoChevronDown
              className={`arrow ${openDropdown === 'gerencia' ? 'rotated' : ''}`}
            />
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

        {/* Dropdown Escolas */}
        <div className="item dropdown-item" ref={escolasRef}>
          <div
            className="item-header"
            onClick={() => toggleDropdown('escolas')}
          >
            <span className="texto">Escolas</span>
            <IoChevronDown
              className={`arrow ${openDropdown === 'escolas' ? 'rotated' : ''}`}
            />
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

        {/* Itens simples */}
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

        {/* Busca */}
        <div className="item search-item">
          <div className="item-header">
            <div className="search-input-container">
              <IoSearch
                className="search-input-icon"
                onClick={() => inputRef.current?.focus()}
              />
              <input
                ref={inputRef}
                type="text"
                className="search-input-inline has-icon"
                placeholder="Digite sua busca..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
