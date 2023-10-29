import { initialProductData } from "../utils/ProductData";

const initialState = {
  products: initialProductData,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      console.log("entry")
      return {
        ...state,
        products: [...state.products, action.product],
      };

    case 'EDIT_PRODUCT':
      const updatedProducts = state.products.map((product) =>
        product.id === action.product.id ? action.product : product
      );
      return {
        ...state,
        products: updatedProducts,
      };

    case 'DELETE_PRODUCT':
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.productId
      );
      console.log(filteredProducts)
      return {
        ...state,
        products: filteredProducts,
      };

    default:
      return state;
  }
};

export default productReducer;
