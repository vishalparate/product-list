import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
const ProductList = ({filterKey, openForm}) => {
  const products = useSelector((state) => state.products);

  let displayProducts;

  if (filterKey === 'all')
    displayProducts = products
  else
    displayProducts =products.filter(product => product.category === filterKey)

  return (
    <div>
      {displayProducts.map((product) => (
        <ProductItem key={product.id} product={product}  openForm={openForm}/>
      ))}
    </div>
  );
};

export default ProductList;