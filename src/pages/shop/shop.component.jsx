import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

//convert from fetchCollectionsStartAsync to getchCollectionsStart
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//here we pass all the props
const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    //trigger useEffect only when fetCollectionsStart changes!

            return (
                <div className='shop-page'>
               <Route
                exact 
                path={`${match.path}`} 
                component= {CollectionsOverviewContainer}
               />

               <Route 
               path={`${match.path}/:collectionId`}  
                component={CollectionPageContainer}
               />


           </div>
        )
    
 }

 const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
  

export default connect(null, mapDispatchToProps)(ShopPage)