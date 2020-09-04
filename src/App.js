import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from '../src/components/header/header-item.component'
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

 

  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props;

       this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if(userAuth) {
            const userRef = await createUserProfileDocument(userAuth)

            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                })
            })
        }
          setCurrentUser(userAuth)
       })
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
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage/>)} />
        </Switch>
      
      </div>
    )
  }

}

//this user is coming from root reducer
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

//here ,first setCurrentUser is just a function
//second set CurrentUser is imported from user.actions.js
const mapDispatchToProps = dispatch => ({
  setCurrentUser: useri => dispatch(setCurrentUser(useri))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
