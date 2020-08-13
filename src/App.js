import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
