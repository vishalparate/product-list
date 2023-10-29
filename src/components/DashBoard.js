import { useState } from 'react';
import OverlayForm from './OverlayForm';
import ProductList from './ProductList';
import '../css/DashBoard.css'

const DashBoard = () => {
  const [filterKey, setFilterKey] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const openForm = (product) => {
    setIsFormOpen(true);
    setEditingProduct(product);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };


  const hanndleFilterChange = (e) => {
     setFilterKey(e.target.value);
  }
 

  return (
    <div >
      <div className='header'>
        <h1 className='heading'>Products</h1>
        <select className='filter' onChange={hanndleFilterChange}>
        <option value="all" defaultValue>All</option>
        <option value="Vegetable"> Vegetable</option>
        <option value="Meat">Meat</option>
        <option value="Furniture">Furniture</option>
      </select>
        <button onClick={() => openForm(null)}>New</button>
      </div>
      {isFormOpen && (
        <OverlayForm
          onClose={closeForm}
          isEditing={!!editingProduct}
          productData={editingProduct || {}}
        />
      )}
      <ProductList filterKey ={filterKey} openForm = {openForm}/> 
    </div>
  );
};

export default DashBoard;