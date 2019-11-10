import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart, loadProducts } from '../actions';
import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  useEffect(() => {
    if (props.products.length === 0) {
      fetch('https://platzi-reto09.eriksape.now.sh/api/products/')
        .then(res => res.json())
        .then(json => props.loadProducts(json.data));
    }
  }, []);

  const handleAddToCart = (product) => {
    props.addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product._id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
$
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  loadProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
