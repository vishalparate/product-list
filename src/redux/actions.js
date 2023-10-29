export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product,
});

export const editProduct = (product) => ({
  type: 'EDIT_PRODUCT',
  product,
});

export const deleteProduct = (productId) => ({
  type: 'DELETE_PRODUCT',
  productId,
});