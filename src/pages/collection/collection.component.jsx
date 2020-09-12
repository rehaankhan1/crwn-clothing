import React from 'react'

import {connect} from 'react-redux'

import {selectCollection} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    
    
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id}  item={item} />
                ))
            }
        </div>
    </div>
    )
}

//state is overall reducer state
//ownProps of props of component that we wrap in connect
//ownProps will get all props from the CollectionPage component
const mapStateToProps = (state, ownProps) => ({
    //selectCollection will return a function call
    //unlike other selector, this selector need a part of state depending on URL
    //first function call will be of selectCollection, second will be of state
    //when selectCollection will return another function, state will be used as another function call
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)