import React, {useEffect,lazy, Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import './App.css';


import Header from '../src/components/header/header-item.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import {  createStructuredSelector  } from 'reselect'

import {GlobalStyle} from './global.styles'

import { connect } from 'react-redux'
import {  selectCurrentUser  } from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.actions'

const Homepage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))




const App = ({checkUserSession, currentUser}) => {

 useEffect(() => {
  checkUserSession()
 },[checkUserSession])
//when we dont want to fire when current User updates, we pass empty array


  
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact={true} path='/' component={Homepage} />
        

        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage/>)} />
        
        </Suspense>
        </ErrorBoundary>
        </Switch>
      </div>
    )
  

}

//this user is coming from root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
