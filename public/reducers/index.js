import { combineReducers } from 'redux';
import { defaultReducer } from './defaultReducer';
import { sensors } from './sensors';
/*
import { dataIndex } from './dataIndex';
import { connectionState } from './connectionState';
import { dataRef } from './dataRef';
import { subscriptions } from './subscriptions';
import { xplane } from './xplane';
*/

export default combineReducers({sensors, defaultReducer});
