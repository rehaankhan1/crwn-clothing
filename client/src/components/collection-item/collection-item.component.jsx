// const dJSON = require('dirty-json');

import {dJSON} from 'dirty-json'

import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import {showDataFromId} from '../../firebase/firebase.utils'


import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem =  ({ item, addItem, data }) => {
  const { name, price, imageUrl } = item;
   if(data) console.log(data.id)

  //  const Result = data || {}
  //  console.log(` L O O K   H E R E -> ${(Result.id)}`)
 let idUser = 'pops'
  // const StringJSON =  JSON.stringify(data)

  // if(data) {
  //   if(data.id) {
  //   //  showDataFromId(data)
  //   // console.log(data.id)
  //   // idUser = data.id

  //   return (
  //     <CollectionItemContainer>
  //       <BackgroundImage className='image' imageUrl={imageUrl} />
  //       <CollectionFooterContainer>
  //         <NameContainer>{name}</NameContainer>
  //         <PriceContainer>{price}</PriceContainer>
  //       </CollectionFooterContainer>
  //       <AddButton onClick={() => addItem(item, data)} inverted>
  //         Add to cart
  //       </AddButton>
  //     </CollectionItemContainer>
  //   );

  //   }
  // }



  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// const mapStateToProps = state => ({
//   data: state.user.currentUser
// })

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);