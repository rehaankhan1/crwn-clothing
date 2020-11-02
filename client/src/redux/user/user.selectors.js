import {createSelector} from 'reselect'

const selectUser = state => state.user

export const selectId = state => state.user.id

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectCurrentUserId = createSelector(
    [selectCurrentUser],
    (user) => user.id
)