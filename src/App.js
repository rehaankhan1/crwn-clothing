import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from '../src/components/header/header-item.component'

function App() {
  return (
    <div>
      <Header />
      
      <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
    
    </div>
  );
}
export default App;
