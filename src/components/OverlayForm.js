// OverlayForm.js
import React, { useState } from 'react';
import '../css/OverlayForm.css';
import ProductForm from './ProductForm';

const OverlayForm = ({ onClose, isEditing, productData }) => {

  return (
    <div className="overlay">
      <div className="form-container">
        <h1>{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
        <ProductForm onClose={onClose} product={isEditing ? productData : null}/>
      </div>
    </div>
  );
};

export default OverlayForm;
