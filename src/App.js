import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
 
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.add(lineItemId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.update(lineItemId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const { cart } = await commerce.cart.remove(lineItemId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />

        <Switch>
          <Route exact path="/">
            <Products products={products} 
            onAddToCart={handleAddToCart} 
            handleUpdateCartQty 
            />
          </Route>

          <Route exact path="/cart">
            <Cart 
            cart={cart} 
            onUpdateCartQty={handleUpdateCartQty} 
            onRemoveFromCart={handleRemoveFromCart} 
            onEmptyCart={handleEmptyCart} 
            />
          </Route>

          <Route exact path="/checkout" >
            <Checkout />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
