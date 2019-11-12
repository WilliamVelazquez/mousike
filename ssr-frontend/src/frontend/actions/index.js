const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const loadProducts = payload => ({
  type: 'LOAD_PRODUCTS',
  payload,
});

export { addToCart, loadProducts };
