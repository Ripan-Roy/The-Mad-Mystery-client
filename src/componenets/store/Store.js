import React from 'react';
import './store.css';
import storeImage from '../../assets/gifs/store.gif';

export default function Store() {
  return (
    <div className="store-container">
      <div className="store-text">Coming Soon</div>
      <img src={storeImage} alt="Store" className="store-image" />
    </div>
  );
}
