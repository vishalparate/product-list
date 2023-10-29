import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions';
import '../css/ProductItem.css'

const ProductItem = ({ product ,openForm}) => {
  const {
    id,
    description,
    canExpire,
    expiryDate,
    category,
    price,
    isOnSpecial,
  } = product;
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    console.log(productId)
     dispatch(deleteProduct(productId));
  }

  const handleEdit = (product) => {
    openForm(product)
  }


  return (
    <div className={`product-item ${isOnSpecial ? 'special' : ''}`}>
      <h2>{description}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>
        {canExpire && expiryDate ? `Expiry Date: ${expiryDate}` : 'Does not expire'}
      </p>
      <div className='buttons'>
      <button className = 'my-button'  onClick = {handleEdit.bind(this, product)}>Edit</button>
      <button className = 'my-button' onClick={handleDelete.bind(this, id)}>Delete</button>
      </div>
      
    </div>
  );
};

export default ProductItem;