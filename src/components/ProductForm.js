import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/actions';
import '../css/ProductForm.css'
const defaultPrpduct = {
  id: '', 
  description: '',
  canExpire: false,
  expiryDate: '',
  category: 'Vegetable',
  price: 0,
  isOnSpecial: false,
};
const ProductForm = ({onClose, product}) => {

  
  const [productData, setProductData] = useState(product ? product : defaultPrpduct);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCategoryChange = (e) => {
    productData['category'] = e.target.value;
    setProductData(productData)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (productData.id === '' && productData.description) {
      productData.id=productData.description + Math.floor(Math.random() * 100) + 1;
      dispatch(addProduct(productData)); 
    } else {
      dispatch(editProduct(productData)); 
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={productData.description}
          onChange={handleChange}
        />
      </label>
  
      <label>
        Can Expire?
        <input
          type="checkbox"
          name="canExpire"
          checked={productData.canExpire}
          onChange={handleChange}
        />
      </label>
  
      {productData.canExpire && (
        <label>
          Expiry Date:
          <input
            type="date"
            name="expiryDate"
            value={productData.expiryDate}
            onChange={handleChange}
          />
        </label>
      )}
  
      <label>
        Category:
        <select className='filter' onChange={handleCategoryChange}>
        <option type="dropdown" name="category" value="Vegetable" defaultValue={true}>Vegetable</option>
        <option type="dropdown" name="category" value="Meat">Meat</option>
        <option type="dropdown" name="category" value="Furniture">Furniture</option>
      </select>
      </label>
  
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
        />
      </label>
  
      <label>
        Is on Special?
        <input
          type="checkbox"
          name="isOnSpecial"
          checked={productData.isOnSpecial}
          onChange={handleChange}
        />
      </label>
      <div className='buttons'>
      <button className = 'my-button' type="submit">Submit</button>
      <button className = 'my-button' onClick={onClose}>Close</button>
      </div>
    </form>
  );
};

export default ProductForm;






