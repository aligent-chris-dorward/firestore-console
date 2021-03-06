/**
 * Firestore Console
 *
 * @category    listingslab
 * @package     firestore-console
 * @repo        https://github.com/listingslab/firestore-console
 * @author      Chris Dorward <listingslab@gmail.com>
 * @license     OSL-3.0
 *
 */

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {
  firebaseStateReducer as firebase /*,
  firestoreReducer */
} from 'react-redux-firebase'
import { reducer as notifications } from 'modules/notification'
import locationReducer from './location'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    // Add sync reducers here
    firebase,
    // firestore: firestoreReducer,
    form,
    location: locationReducer,
    notifications,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
