import "./styles.css";
const ShoppingCart = ({ setCartVisible, shoppingCart, setShoppingCart }) => {
  return (
    <div className="shopping-cart-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <button
              onClick={() => setCartVisible(false)}
              className="button is-danger"
            >
              Close
            </button>
          </div>
        </div>
      </nav>

      <h3>Total Quantity: {shoppingCart.reduce( (acc, cur) => acc + cur.quantity, 0)}</h3>
      <h3>Total Price: ${Math.floor(shoppingCart.reduce( (acc, cur) => acc + cur.price * cur.quantity, 0) * 100) / 100}</h3>

      {shoppingCart.map((product) => {
        return (
          <div
            className="card product-card"
            key={`shopping-cart-${product.id}`}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={product.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{product.quantity} X {product.title}</p>
                </div>
              </div>

              <div className="content">
                <button
                  onClick={() => {
                    setShoppingCart((curr) => {
                        const newShoppingCart = [];
                        for (let item of curr) {
                            if (item.id === product.id) {
                                if (item.quantity > 1) {
                                    const newItem = {...item};
                                    newItem.quantity -= 1;
                                    newShoppingCart.push(newItem);
                                } 
                            } else {
                                newShoppingCart.push({...item});
                            }
                        }
                        return newShoppingCart;
                    });
                  }}
                  className="button is-success"
                >
                  Remove from cart
                </button>
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

export default ShoppingCart;
