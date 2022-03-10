import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <div className='app-container'>
      <Header setCartVisible={setCartVisible}/>
      <ProductList setShoppingCart={setShoppingCart}/>
      {cartVisible && <ShoppingCart 
        setCartVisible={setCartVisible} 
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}/>}
    </div>
  );
}

export default App;
