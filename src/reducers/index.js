import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';


export default combineReducers({
  data: reducer1,
  fav: reducer2
});
