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

import PropTypes from 'prop-types'
import { compose, withContext, getContext } from 'recompose'

export const withStore = compose(
  withContext({ store: PropTypes.object }, () => {}),
  getContext({ store: PropTypes.object })
)

export const withRouter = compose(
  withContext({ router: PropTypes.object }, () => {}),
  getContext({ router: PropTypes.object })
)

export const withStoreAndRouter = compose(
  withContext(
    {
      router: PropTypes.object,
      store: PropTypes.object
    },
    () => {}
  ),
  getContext({ router: PropTypes.object, store: PropTypes.object })
)
