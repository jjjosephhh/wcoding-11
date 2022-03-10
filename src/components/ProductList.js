import "./styles.css";
import { useState, useEffect } from "react";

const ProductList = ({ setShoppingCart }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const items = await response.json();
    setProducts(items);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <div className="card product-card" key={`product-${product.id}`}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={product.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{product.title}</p>
                </div>
              </div>

              <div className="content">
                <button 
                onClick={() => {
                    setShoppingCart(curr => {
                        const newShoppingCart = [];

                        let found = false;

                        for (let item of curr) {
                            const newItem = {...item};
                            if (newItem.id === product.id) {
                                found = true;
                                console.log('found', newItem.id, newItem.quantity);
                                newItem.quantity += 1;
                            }
                            newShoppingCart.push(newItem);
                        }

                        if (!found) newShoppingCart.push({
                            ...product,
                            quantity: 1,
                        });

                        return newShoppingCart;
                    });
                }}
                className="button is-success">Add to cart</button>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
