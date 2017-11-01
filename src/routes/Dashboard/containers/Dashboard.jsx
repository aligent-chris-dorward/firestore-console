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

import React from 'react';
import { withNotifications } from 'modules/notification';

const style = {
  color: 'black',
  background: 'white',
  border: '1px solid black',
  borderRadius: '5px',
  margin: '25px',
  padding: '25px'
}

const Dashboard = () => (
  <div className="dashboard"
       style={style}>
    <h1>Dashboard</h1>
    <h2>Select Collection to work with.</h2>
    <select>
      <option value="1">collection 1</option>
      <option value="2">collection 2</option>
      <option value="3">collection 3</option>
      <option value="4">collection 4</option>
    </select>
  </div>
)

export default Dashboard;
