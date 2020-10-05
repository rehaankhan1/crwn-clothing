import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)
//it will first evaluate the WithSpinner by passing Collection overview
//compose will do evaluation from right to left
//compose allow us to evaluate multiple currying functions

export default CollectionsOverviewContainer