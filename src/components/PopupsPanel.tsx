import React from 'react';
import './PopupsPanel.css';

const PopupsPanel: React.FC = () => {
  return (
    <div className="popups-panel">
      <h2 className="popups-title">Destaques</h2>
      <div className="popups-list">
        <div className="popup">
          <h3 className="popup-title">Popup 1</h3>
          <p className="popup-content">Conteúdo do Popup 1</p>
        </div>
        <div className="popup">
          <h3 className="popup-title">Popup 2</h3>
          <p className="popup-content">Conteúdo do Popup 2</p>
        </div>
        <div className="popup">
          <h3 className="popup-title">Popup 3</h3>
          <p className="popup-content">Conteúdo do Popup 3</p>
        </div>
      </div>
    </div>
  );
};

export default PopupsPanel;