import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
const HatsPage = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
