import './styles.css';

const Header = ({setCartVisible}) => {
  return (
    <nav className="navbar my-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-mall-2444171-2029493.png"
            width="50"
            height="50"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" onClick={() => setCartVisible(true)}>
                <strong>Shopping Cart</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
