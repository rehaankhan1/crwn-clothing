import {createSelector} from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
    collections ? Object.keys(collections).map(key=> collections[key]) : []
)

//here function returns a function
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
             collections => (collections ? collections[collectionUrlParam] : null)
    )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
    //this will return the actual true or false value double !!
)