import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from '../src/components/header/header-item.component'
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import {  createStructuredSelector  } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'


import { connect } from 'react-redux'
import {  selectCurrentUser  } from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.actions'


class App extends React.Component {

 

  unsubscribeFromAuth = null

  componentDidMount() {
      const {checkUserSession} = this.props;
      checkUserSession()
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    
  }

  render() {
    return (
      <div>
        <Header />
        
        <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage/>)} />
        </Switch>
      
      </div>
    )
  }

}

//this user is coming from root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
